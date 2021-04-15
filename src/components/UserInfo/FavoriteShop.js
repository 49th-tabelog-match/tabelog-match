import React from 'react';
import reactLogo from '../../etc/img/react.jpeg'
import sharinganLogo from '../../etc/img/sharingan.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const FavoriteShop = ({ shopImage1, shopImage2, shopImage3, shopName1, shopName2, shopName3 }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000
    };

    console.log(shopImage1)
    return (
        <>
            <div className='favorite-shop favorite-shop-pc'>
                <div className='favorite-shop-contents'>
                    <div className="favorite-shop-content">
                        <p className="favorite-shop-number">No.1</p>
                        <div className="shop-thumbnail">
                            <img src={shopImage1 || ''} alt="" />
                        </div>
                        <p className='favorite-shop-name'>{shopName1}</p>
                        <p className='Aggregate'>34.5万またいきてぇ</p>
                    </div>

                    <div className="favorite-shop-content">
                        <p className="favorite-shop-number">No.2</p>
                        <div className="shop-thumbnail">
                            <img src={shopImage2 || ''} alt="" />
                        </div>
                        <p className='favorite-shop-name'>{shopName2}</p>
                        <p className='Aggregate'>24.5万またいきてぇ</p>
                    </div>

                    <div className="favorite-shop-content">
                        <p className="favorite-shop-number">No.3</p>
                        <div className="shop-thumbnail">
                            <div className="non-image-text">
                                {/* <p>またいきてぇをした<br />お店がありません</p> */}
                                <img src={shopImage3 || ''} alt="" />
                            </div>
                        </div>
                        <p className='favorite-shop-name'>{shopName3}</p>
                        <p className='Aggregate'>7.5万またいきてぇ</p>
                    </div>
                </div>
            </div>

            <div className='favorite-shop favorite-shop-sp' >
                <div className='favorite-shop-contents'>
                    <Slider {...settings}>
                        <div className="favorite-shop-content">
                            <p className="favorite-shop-number">No.1</p>
                            <div className="shop-thumbnail">
                                <img src={shopImage1 || ''} alt="" />
                            </div>
                            <div style={{ width: '200px', margin: 'auto' }}>
                                <p className='favorite-shop-name'>{shopName1}</p>
                                <p className='Aggregate'>34.5万またいきてぇ</p>
                            </div>
                        </div>

                        <div className="favorite-shop-content">
                            <p className="favorite-shop-number">No.2</p>
                            <div className="shop-thumbnail">
                                <img src={shopImage2 || ''} alt="" />
                            </div>
                            <div style={{ width: '200px', margin: 'auto' }}>
                                <p className='favorite-shop-name'>{shopName2}</p>
                                <p className='Aggregate'>24.5万またいきてぇ</p>
                            </div>
                        </div>

                        <div className="favorite-shop-content">
                            <p className="favorite-shop-number">No.3</p>
                            <div className="shop-thumbnail">
                                <img src={shopImage3 || ''} alt="" />
                            </div>
                            <div style={{ width: '200px', margin: 'auto' }}>
                                <p className='favorite-shop-name'>{shopName3}</p>
                                <p className='Aggregate'>7.5万またいきてぇ</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
        </>


    )
}

export default FavoriteShop;