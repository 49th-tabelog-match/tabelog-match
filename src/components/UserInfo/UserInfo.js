import React, { useContext, useEffect, useState } from 'react';
import FormDialog from '../Forms/FormDialog'
import FavoriteShop from './FavoriteShop';
import ImageArea from './ImageArea';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { AuthContext } from '../../AuthProvider';
import { db } from '../../firebase';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const useStyles = makeStyles({
    'button': {
        '@media screen and (max-width: 600px)': {
            marginTop: '30px'
        }
    }
})

const UserInfo = () => {
    // firestoreから取得したuser情報を入れるステート
    const [users, setUsers] = useState([]);
    console.log(users)

    // プロフィール編集用のモーダルの開閉を管理するstate
    const [open, setOpen] = useState(false);

    // フォトアイコンクリック→画像選択後に画像情報が入ってくるステート
    const [images, setImages] = useState('');

    // プロフィール編集ボタンをクリックしたらstate:openがtrueになる
    const handleClickOpen = () => {
        setOpen(true);
    };

    // 特定の条件(編集の確定やキャンセル、背景をクリック)したときにモーダルを閉じる関数
    const handleClose = () => {
        setOpen(false);
    };

    const [good, setGood] = useState('')
    console.log(good)

    const classes = useStyles();

    const { authUser } = useContext(AuthContext)

    const disabled = authUser ? false : true;

    const email = authUser && authUser.email;

    const uid = authUser && authUser.uid

    useEffect(() => {

        db.collection('users').where('email', '==', email)
            .onSnapshot(snapshot => {
                const getUsers = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        docId: doc.id
                    }
                })
                setUsers(getUsers)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authUser])

    // useEffect(() => {
    //     db.collection('users').doc('7sWqXd63PlbIw8fijmal').collection('good').orderBy('timestamp', 'desc').limit(3)
    //         .onSnapshot(snapshot => {
    //             const getGood = snapshot.docs.map((doc) => {
    //                 return {
    //                     restId: doc.id
    //                 }
    //             })
    //             setGood(getGood)
    //         })
    // }, [])
    // useEffect(() => {
    //     db.collection('users').where('email', '==', email).collection('good').orderBy('timestamp', 'desc').limit(3)
    //         .onSnapshot(snapshot => {
    //             const getGood = snapshot.docs.map((doc) => {
    //                 return {
    //                     restId: doc.id
    //                 }
    //             })
    //             setGood(getGood)
    //         })
    // }, [])

    const [shop, setShop] = useState('')

    useEffect(() => {
        users.length > 0 && db.collection('users').doc(users[0].docId).collection('good')
            .onSnapshot(snapshot => {
                const getGoodShop = snapshot.docs.map(doc => {
                    return {
                        restId: doc.id
                    }
                })
                setGood(getGoodShop)
            })
        authUser || setGood('')
    }, [users])



    const API_ENDPOINT = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=4883ba76de4f3d72&id=${good[good.length - 1] && good[good.length - 1].restId}&id=${good[good.length - 2] && good[good.length - 2].restId}&id=${good[good.length - 3] && good[good.length - 3].restId}&format=jsonp`

    useEffect(() => {
        console.log(good[good.length - 2])
        axios.get(API_ENDPOINT, { 'adapter': jsonpAdapter })
            .then((res) => {
                console.log(res.data.results.shop)
                setShop(res.data.results.shop)
            })
    }, [good])

    console.log()



    return (
        <>
            <div className='user-profile container'>

                <div className='user-profile-config'>
                    <ImageArea images={users[0] && users[0].userImage} />
                    <div>

                        <Button className={classes.button}
                            onClick={handleClickOpen}
                            endIcon={<EditIcon />}
                            color={'primary'}
                            variant={'contained'}
                            disabled={disabled}
                        >
                            プロフィールを編集
                        </Button>
                    </div>
                </div>

                <div className='user-info-wrap'>
                    <h2 className="user-info-title user-info-title-first ">{users[0] && users[0].username}</h2>
                    <TextField
                        variant='outlined'
                        fullWidth={true}
                        multiline={true}
                        value={users[0] ? (users[0].userDesc) : ('')}
                        rows={5} InputProps={{ readOnly: true }}
                        placeholder='自己紹介' />
                </div>

                <div className='user-info-wrap'>
                    <h2 className='user-info-title'>こんな感じでごはんが食べたい</h2>
                    <p className="user-info-desc user-info-desc-second">このユーザーがどんなふうに一緒にごはんを食べたいのか分かります</p>
                </div>

                <div className='user-info-wrap'>
                    <h2 className='user-info-title'>行くお店のジャンルの傾向</h2>
                    <p className="user-info-desc">このサービスを使ったお店から集計しています</p>
                </div>

                <div className='user-info-wrap'>
                    <h2 className='user-info-title'>時間帯の傾向</h2>
                    <p className="user-info-desc">このサービスを使って行ったときの時間帯から集計しています</p>
                </div>

                <div className='user-info-wrap'>
                    <h2 className='user-info-title'>またいきてぇお店</h2>
                    <p className="user-info-desc">この人がまたいきてぇをしたお店です</p>
                    <FavoriteShop
                        shopImage1={shop.length !== 0 && shop[0].photo.pc.m}
                        shopImage2={shop.length !== 0 && shop[1].photo.pc.m}
                        shopImage3={shop.length !== 0 && shop[2].photo.pc.m}
                        shopName1={shop.length !== 0 && shop[0].name}
                        shopName2={shop.length !== 0 && shop[1].name}
                        shopName3={shop.length !== 0 && shop[2].name}
                    />
                </div>

                <div className='user-info-wrap'>
                    <h2 className='user-info-title'>行ったお店のコメント</h2>
                    <p className="user-info-desc">この人がまたいきてぇをしたお店です</p>
                    <FavoriteShop />
                </div>

            </div>

            <FormDialog
                open={open}
                handleClose={handleClose}
                images={images}
                setImages={setImages}
                setUsers={setUsers}
                docId={users[0] && users[0].docId}
            />
        </>
    )
}

export default UserInfo;