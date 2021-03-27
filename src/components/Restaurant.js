import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Geocode from 'react-geocode'

// styled-components
const ShopImg = styled.img`
    height: 200px;
    width: 200px;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 40px;
`;

const MoreImg = {
    height: "400px",
    width: "80%",
    margin: "40px auto",
    border: "1px solid #000"
};

const Wrapper = styled.section`
    display: flex;
    padding: 0 6% 0;
    margin-bottom: 20px;
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
`;

const Location = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const GoodTab = styled.div`
height: 50px;
width: 300px;
margin: 0 auto;
background-color: #0099ff;
text-align: center;
padding: 5px 0;
`;

const GoodButtonParagraph = styled.p`
font-size: 40px;
color: #fff;
`;

const Restaurant = () => {
    // いいね(行きてえ)済みかどうかの確認
    const [good, setGood] = useState(false);

    // 緯度・経度を変更
    const center = {
        lat: 35.69575,
        lng: 139.77521
    };

    const [location, setLocation] = useState(center)
    Geocode.setApiKey("API-KEY");
    Geocode.setLanguage('ja');
    Geocode.setRegion('ja');

    //とりあえず検索機能で試す
    const [value, setValue] = useState('')
    const handleResearch = (value) => {
        Geocode.fromAddress(value).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                setLocation({ lat, lng });
            },
            (error) => {
                console.error(error);
            }
        );
    }


    //いいねの状態の切り替え
    const handleClick = () => {
        good ? setGood(false) : setGood(true);
        console.log(good)
    }

    return (
        <>
            <section>
                <input type='text'
                    onChange={e => {
                        console.log(e)
                        setValue(e.target.value)
                    }}
                />
                <button onSubmit={handleResearch(value)}>検索</button>
            </section>
            <Wrapper>
                <ShopImg url=""></ShopImg>
                <div>
                    <ul>
                        <InfoList>店名<span></span></InfoList>
                        <InfoList>エリア<span></span></InfoList>
                        <InfoList>ジャンル<span></span></InfoList>
                        <InfoList>営業時間<span></span></InfoList>
                        <InfoList>定休日<span></span></InfoList>
                        <InfoList>平均予算<span></span></InfoList>
                    </ul>
                </div>
            </Wrapper>
            <GoodTab onClick={handleClick}>
                {
                    good ?
                        <GoodButtonParagraph>行きてえ済</GoodButtonParagraph> : <GoodButtonParagraph>行きてえ</GoodButtonParagraph>
                }
            </GoodTab>
            <section>
                <Detail>
                    <DetailItem>a</DetailItem>
                    <DetailItem>a</DetailItem>
                    <DetailItem>a</DetailItem>
                    <DetailItem>a</DetailItem>
                </Detail>
            </section>
            <Location>
                <h1>お店の場所</h1>
                <LoadScript googleMapsApiKey='API-KEY'>
                    <GoogleMap
                        mapContainerStyle={MoreImg}
                        center={location}
                        zoom={17}
                    ></GoogleMap>
                </LoadScript>
            </Location>
        </>
    )
}

export default Restaurant