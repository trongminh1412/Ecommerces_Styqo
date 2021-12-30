import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardBody } from 'reactstrap';

function collection(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="card__item">
          <Card>
            <Image
              src="/home/collection.png"
              alt="collection"
              layout="intrinsic"
              width={411}
              height={249}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold text-capitalize"> For Bedroom </h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <a className="btn btn-sm shadow-md button_collection">
                  Shop Now
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/collection.png"
              alt="collection"
              layout="intrinsic"
              width={411}
              height={249}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold text-capitalize"> For Bedroom </h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <a className="btn btn-sm shadow-md button_collection">
                  Shop Now
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/collection.png"
              alt="collection"
              layout="intrinsic"
              width={411}
              height={249}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold text-capitalize"> For Bedroom </h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <a className="btn btn-sm shadow-md button_collection">
                  Shop Now
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/collection.png"
              alt="collection"
              layout="intrinsic"
              width={411}
              height={249}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold text-capitalize"> For Bedroom </h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <a className="btn btn-sm shadow-md button_collection">
                  Shop Now
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
      </Slider>
    </>
  );
}

export default collection;
