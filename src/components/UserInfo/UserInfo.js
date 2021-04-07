import React, { useContext, useState } from 'react';
import FormDialog from '../Forms/FormDialog'
import FavoriteShop from './FavoriteShop';
import ImageArea from './ImageArea';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { AuthContext } from '../../AuthProvider';

const useStyles = makeStyles({
    'button': {
        '@media screen and (max-width: 600px)': {
            marginTop: '30px'
        }
    }
})

const UserInfo = () => {
    // プロフィール編集用のモーダルの開閉を管理するstate
    const [open, setOpen] = useState(false);

    // 画面上にある自己紹介の部分に表示させる文字列を代入するステート
    const [selfIntroduction, setSelfIntroduction] = useState('')

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

    const classes = useStyles();

    const { authUser } = useContext(AuthContext)
    console.log(authUser)

    const disabled = authUser ? false : true;

    return (
        <>
            <div className='user-profile container'>
                <div className='user-profile-config'>
                    <ImageArea images={images} />
                    <div>

                        <Button className={classes.button} onClick={handleClickOpen} endIcon={<EditIcon />} color={'primary'} variant={'contained'} disabled={disabled} >プロフィールを編集</Button>
                    </div>
                </div>

                <div className='user-info-wrap'>
                    <h2 className="user-info-title user-info-title-first ">ユーザーネーム</h2>
                    {/* <p className='user-info-desc'>自己紹介</p> */}
                    {/* <p style={{ marginTop: '7px', lineHeight: '1.65', wordWrap: 'break-word' }}>
                        {selfIntroduction}
                    </p> */}
                    <TextField variant='outlined' fullWidth={true} multiline={true} value={selfIntroduction} rows={5} InputProps={{ readOnly: true }} placeholder='自己紹介' />
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
                    <FavoriteShop />
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
                setSelfIntroduction={setSelfIntroduction}
                images={images}
                setImages={setImages}
            />
        </>
    )
}

export default UserInfo;