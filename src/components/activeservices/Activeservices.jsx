import React from 'react';
import Slider from "react-slick";
const Activeservices = () => {
    const settings = {
        slidesToShow: 1,
        infinite: true, 
        autoplay: true,
        arrows: false,
        swipeToSlide: true,
        fade: true,
    }
    return (
        <div class="chuong-trinh-noi-bat-slick">
            <Slider {...settings}>
                <img srcSet="slick1.webp" className="slick-img"/>
                <img srcSet="slick2.webp" className="slick-img"/>
                <img srcSet="slick3.webp" className="slick-img"/>
            </Slider>
        </div>
    );
};

export default Activeservices;