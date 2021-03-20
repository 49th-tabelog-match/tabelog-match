import React from 'react';

const FavoriteShop = () => {
    return (
        <div className='favorite-shop'>
            <div className='favorite-shop-contents'>
                <div className="favorite-shop-content">
                    <p className="number">No.1</p>
                    <div className="shop-thumbnail">
                        <img src="" alt="" />
                    </div>
                    <p className='shop-name'>店名</p>
                    <p className='Aggregate'>34.5万またいきてぇ</p>
                </div>

                <div className="favorite-shop-content">
                    <p className="number">No.2</p>
                    <div className="shop-thumbnail">
                        <img src="" alt="" />
                    </div>
                    <p className='shop-name'>店名</p>
                    <p className='Aggregate'>24.5万またいきてぇ</p>
                </div>

                <div className="favorite-shop-content">
                    <p className="number">No.3</p>
                    <div className="shop-thumbnail">
                        <img src="" alt="" />
                    </div>
                    <p className='shop-name'>店名</p>
                    <p className='Aggregate'>7.5万またいきてぇ</p>
                </div>
            </div>
        </div>
    )
}

export default FavoriteShop;