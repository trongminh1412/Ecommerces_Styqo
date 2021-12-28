import Head from 'next/head';
import Image from 'next/image';
import IndexNavbar from '../components/Navbars/IndexNavbar';
import styles from '../styles/Home.module.scss';
import EmblaCarousel from 'components/slider/slider';
import { Container, Col, Row } from 'reactstrap';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <IndexNavbar fixed />

      <EmblaCarousel slides={slides} />

      <section className="s-category">
        <div className="s-category__content">
          <Container>
            <div className="d-flex justify-content-between align-content-start">
              {/* <Col> */}
              <div className="s-category__content--block">
                <Row>
                  <Col
                    lg="6"
                    md="12"
                    className="align-self-center text-md-center"
                  >
                    <div className="s-category__content--block--image">
                      <Image
                        src="/home/s-category1.png"
                        alt=""
                        layout="intrinsic"
                        width={75}
                        height={75}
                      />
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    md="12"
                    className="text-md-center text-lg-start align-self-center ps-lg-0"
                  >
                    <div className="s-category__content--block--title">
                      <h5 className="title-first">Fashion</h5>
                      <p>Shop $1</p>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* </Col>
              <Col> */}
              <div className="s-category__content--block">
                <Row>
                  <Col
                    lg="6"
                    md="12"
                    className="align-self-center text-md-center"
                  >
                    <div className="s-category__content--block--image">
                      <Image
                        src="/home/s-category2.png"
                        alt=""
                        layout="intrinsic"
                        width={75}
                        height={75}
                      />
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    md="12"
                    className="text-md-center text-lg-start align-self-center ps-lg-0"
                  >
                    <div className="s-category__content--block--title">
                      <h5 className="title-second">Tech</h5>
                      <p>Hot deals</p>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* </Col>
              <Col> */}
              <div className="s-category__content--block">
                <Row>
                  <Col
                    lg="6"
                    md="12"
                    className="align-self-center text-md-center"
                  >
                    <div className="s-category__content--block--image">
                      <Image
                        src="/home/s-category3.png"
                        alt=""
                        layout="intrinsic"
                        width={75}
                        height={75}
                      />
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    md="12"
                    className="text-md-center text-lg-start align-self-center ps-lg-0"
                  >
                    <div className="s-category__content--block--title">
                      <h5 className="title-third">Beauty</h5>
                      <p>Coupon</p>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* </Col>
              <Col> */}
              <div className="s-category__content--block">
                <Row>
                  <Col
                    lg="6"
                    md="12"
                    className="align-self-center text-md-center"
                  >
                    <div className="s-category__content--block--image">
                      <Image
                        src="/home/s-category4.png"
                        alt=""
                        layout="intrinsic"
                        width={75}
                        height={75}
                      />
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    md="12"
                    className="text-md-center text-lg-start align-self-center ps-lg-0"
                  >
                    <div className="s-category__content--block--title">
                      <h5 className="title-fourth">Kids</h5>
                      <p>buy 1 get 1</p>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* </Col>
              <Col> */}
              <div className="s-category__content--block">
                <Row>
                  <Col
                    lg="6"
                    md="12"
                    className="align-self-center text-md-center"
                  >
                    <div className="s-category__content--block--image">
                      <Image
                        src="/home/s-category5.png"
                        alt=""
                        layout="intrinsic"
                        width={75}
                        height={75}
                      />
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    md="12"
                    className="text-md-center text-lg-start align-self-center ps-lg-0"
                  >
                    <div className="s-category__content--block--title">
                      <h5 className="title-fifth">Home</h5>
                      <p>Shop $2</p>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* </Col> */}
            </div>
          </Container>
        </div>
      </section>

      <section className="s-special">
        <div className="s-special__content">
          <Container>
            <div className="s-special__content--title">
              <h3 className="fw-bold">Special deals</h3>
              <h6 className="float-end border-bottom border-dark">See All</h6>
            </div>
            <div className="">
              <h2>background-size: auto (default):</h2>
              <div id="example1">
                <h2>Hello World</h2>
                <p>The background image is displayed in its original size.</p>
              </div>

              <h2>background-size: 300px 100px:</h2>
              <div id="example2">
                <h2>Hello World</h2>
                <p>
                  Here, the background image is set to 300px wide and 100px
                  high.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
