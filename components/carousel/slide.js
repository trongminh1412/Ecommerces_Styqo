import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userService } from 'services';
import { useRouter } from 'next/dist/client/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const Slide = ({ banner }) => {
  // login
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <button className="custom__paging--button" />;
    },
  };
  return (
    <div className="slide__banner position-relative">
      {/* <h1>{banner}</h1> */}
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
      {user ? (
        <div></div>
      ) : (
        <div className="signin_block position-absolute">
          <Container>
            <div className="signin_block--title">
              <p>Sign in so we can personalize your experience</p>
            </div>
            <div className="signin_block--content">
              <Container>
                <Row>
                  <Col md="6">
                    <Link href="/auth/register" className="text-danger">
                      Register
                    </Link>
                  </Col>
                  <Col md="6">
                    <Link href="/auth/login" className="text-danger">
                      Sign in
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};
export default Slide;
