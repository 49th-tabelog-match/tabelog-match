import React from 'react';
import dummy from '../../etc/img/dummy.jpeg'


const ImageArea = ({ images }) => {
    console.log(images)

    return (
        <div className="user-profile-images" >
            <div className="user-profile-img-and-button">
                <div className='user-profile-img'>
                    <img className='img' src={images ? images : dummy} alt='' />
                </div>
            </div>
        </div>
    )
}

export default ImageArea;