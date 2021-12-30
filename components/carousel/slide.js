import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function slide(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <button className="custom__paging--button" />;
    },
  };
  return (
    <div className="slide__banner">
      <Slider {...settings}>
        <div>
          <Image
            src="/slide/slide1.jpg"
            alt="slide"
            width={1000}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/slide/slide2.jpg"
            alt="slide"
            width={1000}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/slide/slide1.jpg"
            alt="slide"
            width={1000}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/slide/slide2.jpg"
            alt="slide"
            width={1000}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/slide/slide1.jpg"
            alt="slide"
            width={1000}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/slide/slide2.jpg"
            alt="slide"
            width={1000}
            height={300}
            layout="responsive"
          />
        </div>
      </Slider>
    </div>
  );
}

export default slide;
