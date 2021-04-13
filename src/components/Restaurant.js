import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Geocode from 'react-geocode'
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router';


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

const Detail = styled.ul`
    display: flex;
    margin: 0 auto;
    padding: 0 10% 0;
`;

const DetailItem = styled.li`
    height: 40px;
    width: 20%;
    font-size: 40px;
    text-align: center;
    background-color: #0099ff;
    color: #fff;
    border-radius: 40px;
    margin: 20px 10px 20px;
    list-style: none;
`;

const Location = styled.section`
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

const Restaurant = () => {
    const location = useLocation();
    const state = location.state.shopInfo;
    console.log(state);
    // いいね(行きてえ)済みかどうかの確認
    const [good, setGood] = useState(false);

    // 緯度・経度を変更
    const center = {
        lat: 35.69575,
        lng: 139.77521
    };

    const [place, setPlace] = useState(center)
    Geocode.setApiKey("AIzaSyB26m7lkERDazaDC824vGcSXp-FXfFZqGM");
    Geocode.setLanguage('ja');
    Geocode.setRegion('ja');

    useEffect(() => {
        Geocode.fromAddress(state.address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setPlace({ lat, lng });
            },
            (error) => {
                console.log(error);
            }
        );
        console.log(state.photo.pc.m);
    }, []);


    // いいねの状態の切り替え
    const handleClick = () => {
        if (good === false) {
            setGood(true);
        }
    };

    return (
        <>
            <Wrapper>
                <ShopImg src={state.photo.pc.m}></ShopImg>
                <div>
                    <ul>
                        <InfoList>店名　<Span>{state.name}</Span></InfoList>
                        <InfoList>アクセス　<Span>{state.access}</Span></InfoList>
                        <InfoList>ジャンル　<Span>{state.genre.name}</Span></InfoList>
                        <InfoList>営業時間　<Span>{state.open}</Span></InfoList>
                        <InfoList>平均予算　<Span>{state.budget.name}</Span></InfoList>
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
                <LoadScript googleMapsApiKey='AIzaSyB26m7lkERDazaDC824vGcSXp-FXfFZqGM'>
                    <GoogleMap
                        mapContainerStyle={MapStyle}
                        center={place}
                        zoom={17}
                    ></GoogleMap>
                </LoadScript>
            </Location>
        </>
    )
}

export default Restaurant