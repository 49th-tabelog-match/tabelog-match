import React from 'react'
import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Geocode from 'react-geocode'
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { db, auth } from '../firebase/index';
import { AuthContext } from '../AuthProvider';

// styled-components
const ShopImg = styled.img`
    height: 200px;
    width: 200px;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 40px;
`;

const MapStyle = {
    height: "400px",
    width: "80%",
    margin: "40px auto",
    border: "1px solid #000"
};

const Wrapper = styled.section`
    display: flex;
    margin-bottom: 20px;
    background-color: #c0c0c0;
`;

const InfoList = styled.li`
    margin-top: 25px;
`;

const Location = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const CommentSection = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const GoodButton = styled(Button)`
height: 50px;
width: 300px;
margin: 0 auto;
background-color: #0099ff;
float: right;
`;

const GoodButtonParagraph = styled.p`
color: #fff;
font-weight: bold;
font-size: 100%;
`;

const Span = styled.span`
    font-weight: bold;
`;

const CommentForm = styled.form`
    width: 100%;
    margin: 0 auto;
    background-color: #c0c0c0;
    display: flex;
    flex-direction: column;
`;
//ここまでがスタイル

const Restaurant = () => {
    //ユーザー情報を受け取るstate
    const [user, setUser] = useState([]);
    //useEffectからお店情報をstateで受け取る
    const [shopResult, setShopResult] = useState([{
        address: '',
        photo: {
            pc: {
                m: ''
            }
        },
        name: '',
        access: '',
        genre: '',
        open: '',
        budget: {
            name: ''
        }
    }]);

    //パスからお店のIDを取得
    const { id } = useParams();

    //user情報を取得
    const { authUser } = useContext(AuthContext);
    const email = authUser && authUser.email;

    useEffect(() => {
        db.collection('users').where('email', '==', email)
            .onSnapshot(snapshot => {
                const getUsers = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        docId: doc.id
                    }
                });
                console.log(getUsers);
                setUser(getUsers);
            });
        axios.get(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=17f7928912557ff8&id=${id}&order=4&format=jsonp`, {
            'adapter': jsonpAdapter,
        }).then(res => {
            console.log(res.data.results.shop);
            setShopResult(res.data.results.shop);
        }).catch(error => {
            console.log(error);
        });
        Geocode.fromAddress(shopResult[0].address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setPlace({ lat, lng });
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    // 緯度・経度を変更
    const center = {
        lat: 35.69575,
        lng: 139.77521
    };

    const [place, setPlace] = useState(center);

    Geocode.setApiKey("AIzaSyCRGWITzHnk-iquHDOpWpKu1lNmVoMWSKY");
    Geocode.setLanguage('ja');
    Geocode.setRegion('ja');

    // いいね(行きてえ)済みかどうかの確認
    const [good, setGood] = useState(false);

    // いいねの状態の切り替え
    const handleClick = () => {
        if (good === false) {
            console.log(`${user[0].id},${id}`);
            // db.collection('rest').doc(`${id}`)
            //     .collection('good').doc(`${user[0].id}`).set({
            //         user_id: user[0].id
            //     });
            // db.collection('users').doc(`${user[0].id}`)
            //     .collection('good').doc(`${id}`).set({
            //         rest_id: id,
            //         timestamp: new Date()
            //     })
            setGood(true);
        }
    };

    //コメントのタイトルと文章をstateに渡す

    return (
        <>
            <Wrapper>
                <ShopImg src={shopResult[0].photo.pc.m}></ShopImg>
                <div>
                    <ul>
                        <InfoList>店名　<Span>{shopResult[0].name}</Span></InfoList>
                        <InfoList>アクセス　<Span>{shopResult[0].access}</Span></InfoList>
                        <InfoList>ジャンル　<Span>{shopResult[0].genre.name}</Span></InfoList>
                        <InfoList>営業時間　<Span>{shopResult[0].open}</Span></InfoList>
                        <InfoList>平均予算　<Span>{shopResult[0].budget.name}</Span></InfoList>
                        <InfoList>いいね数　<Span>0</Span></InfoList>
                    </ul>
                </div>
                <GoodButton onClick={handleClick}>
                    {
                        good ?
                            <GoodButtonParagraph>行きてえ済</GoodButtonParagraph> : <GoodButtonParagraph>行きてえ</GoodButtonParagraph>
                    }
                </GoodButton>
            </Wrapper>

            <Location>
                <h1 style={{ fontWeight: 'bold' }}>お店の場所</h1>
                <LoadScript googleMapsApiKey='AIzaSyCRGWITzHnk-iquHDOpWpKu1lNmVoMWSKY'>
                    <GoogleMap
                        mapContainerStyle={MapStyle}
                        center={place}
                        zoom={17}
                    ></GoogleMap>
                </LoadScript>
            </Location>

            <CommentSection>
                <h1 style={{ fontWeight: 'bold' }}>お店へのコメント</h1>
                <CommentForm>
                    <input></input>
                    <textarea></textarea>
                    <Button type='submit'>送信</Button>
                </CommentForm>
            </CommentSection>
        </>
    )
}


export default Restaurant