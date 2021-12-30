import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconContext } from 'react-icons';
import { AiOutlineStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Card, CardBody } from 'reactstrap';

function flash_deal(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
        <div className="card__item">
          <Card>
            <Image
              src="/home/featured_product.png"
              alt="collection kids"
              layout="intrinsic"
              width={200}
              height={150}
            />
            <CardBody>
              <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
              <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                <span className="text-decoration-line-through">$15.00</span>
                <span className="fee-float-right ps-2">$11.00</span>
              </div>
              <div className="d-flex justify-content-between fs-12">
                <IconContext.Provider
                  value={{
                    color: '#FFC120',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <AiOutlineStar />
                    <span>4.6</span>
                  </div>
                </IconContext.Provider>
                <span>86 Reviews</span>
                <BsThreeDotsVertical />
              </div>
              <div></div>
            </CardBody>
          </Card>
        </div>
      </Slider>
    </>
  );
}

export default flash_deal;
