import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './styles.css';

const ImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // Example array of images
    const images = [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        "https://swiperjs.com/demos/images/nature-4.jpg",
        "https://swiperjs.com/demos/images/nature-5.jpg",
        "https://swiperjs.com/demos/images/nature-6.jpg",
        "https://swiperjs.com/demos/images/nature-7.jpg",
        "https://swiperjs.com/demos/images/nature-8.jpg",
        "https://swiperjs.com/demos/images/nature-9.jpg",
        "https://swiperjs.com/demos/images/nature-10.jpg"
    ];

    return (
        <>
            {/* Main Image Slider with lazy loading */}
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                lazy={true} // Lazy load images for performance
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Nature ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Slider */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail-slide" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ImageSlider;
