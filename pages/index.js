import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { AiOutlineRight, AiOutlineStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Container, Col, Row, Card, CardBody, Button } from 'reactstrap';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/footer';
import SlideCarousel from 'components/carousel/slide';
import SpecialCarousel from 'components/carousel/product_special';
import FlashDealCarousel from 'components/carousel/flash_deal';
import SellingCarousel from 'components/carousel/best_selling';
import CollectionCarousel from 'components/carousel/collection';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <IndexNavbar fixed />

      <SlideCarousel />

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
                        src="/home/s-category.png"
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
                        src="/home/s-category.png"
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
                        src="/home/s-category.png"
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
                        src="/home/s-category.png"
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
                        src="/home/s-category.png"
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
            <div className="s-special__content--title d-flex flex-wrap align-items-center">
              <h3 className="fw-bold">Special deals</h3>
              <h6 className="border-bottom border-dark ms-auto">See All</h6>
            </div>
            <div className="s-special__content__body">
              <SpecialCarousel />
            </div>
          </Container>
        </div>
      </section>

      <section className="s-flash_sale">
        <div className="s-flash_sale__content">
          <Container>
            <div className="s-flash_sale__content--title d-flex flex-wrap align-items-center">
              <h3 className="fw-bold text-danger">Flash sale</h3>
              <h6 className="border-bottom border-dark ms-auto">See All</h6>
            </div>
            <div className="s-flash_sale__content__body">
              <FlashDealCarousel />
            </div>
          </Container>
        </div>
      </section>

      <section className="s-collection_kids">
        <div className="s-collection_kids__content">
          <Container>
            <div className="s-collection_kids__content--title d-flex flex-wrap align-items-center">
              <div className="d-flex align-items-center">
                <h3 className="fw-bold pe-3">Kids</h3>
                <h6 className="collection_kids--text">
                  <Link href="#">Collection</Link>
                  <AiOutlineRight />
                </h6>
              </div>
              <h6 className="float-end border-bottom border-dark ms-auto">
                See All
              </h6>
            </div>
            <div className="s-collection_kids__content--card pt-3">
              <Row>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
                  <Card>
                    <Image
                      src="/home/s-collection-kids.png"
                      alt="collection kids"
                      layout="intrinsic"
                      width={200}
                      height={150}
                    />
                    <CardBody>
                      <h6 className="fs-14 fw-bold"> Mitao Cat Second Ge...</h6>
                      <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                        <span>$15.00</span>
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
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>

      <section className="s-collection">
        <div className="s-collection__content">
          <Container>
            <div className="s-collection__content--title d-flex flex-wrap align-items-center">
              <h3 className="fw-bold text-danger">Collections</h3>
              <h6 className="border-bottom border-dark ms-auto">
                All Collections
              </h6>
            </div>
            <div className="s-collection__content__body">
              <CollectionCarousel />
            </div>
          </Container>
        </div>
      </section>

      <section className="s-banner_price">
        <div className="s-banner_price__content">
          <Container>
            <Row>
              <Col lg="4" md="6">
                <div className="s-banner_price__content--banner">
                  <Image
                    src="/home/banner_price.png"
                    alt="banner price"
                    width={413}
                    height={167}
                    layout="responsive"
                  />
                </div>
              </Col>
              <Col lg="4" md="6">
                <div className="s-banner_price__content--banner">
                  <Image
                    src="/home/banner_price.png"
                    alt="banner price"
                    width={413}
                    height={167}
                    layout="responsive"
                  />
                </div>
              </Col>
              <Col lg="4" md="6">
                <div className="s-banner_price__content--banner">
                  <Image
                    src="/home/banner_price.png"
                    alt="banner price"
                    width={413}
                    height={167}
                    layout="responsive"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="s-best_selling">
        <div className="s-best_selling__content">
          <Container>
            <div className="s-best_selling__content--title d-flex flex-wrap align-items-center">
              <h3 className="fw-bold text-danger">Best selling</h3>
              <h6 className="border-bottom border-dark ms-auto">See All</h6>
            </div>
            <div className="s-best_selling__content__body">
              <SellingCarousel />
            </div>
          </Container>
        </div>
      </section>

      <section className="s-banner_link">
        <div className="s-banner_link__content">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="s-banner_link__content--banner">
                  <Image
                    src="/home/banner_link.png"
                    alt="banner price"
                    width={627}
                    height={135}
                    layout="responsive"
                  />
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="s-banner_link__content--banner">
                  <Image
                    src="/home/banner_link.png"
                    alt="banner price"
                    width={627}
                    height={135}
                    layout="responsive"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="s-best_seller">
        <div className="s-best_seller__content">
          <Container>
            <div className="d-flex flex-wrap align-items-center">
              <h3 className="fw-bold pe-3">Best sellers </h3>
              <h6 className="float-end border-bottom border-dark ms-auto">
                All Sellers
              </h6>
            </div>
            <div className="s-best_seller__content--body pt-3">
              <Row>
                <Col lg="4" md="6">
                  <div className="content--body_block d-flex flex-wrap align-items-center justify-content-between">
                    <div className="content--body_block--image">
                      <Image
                        src="/home/bestseller.png"
                        alt="collection kids"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div>
                      <h6 className="fs-14"> Mom & Baby</h6>
                      <div className="d-flex justify-content-between fs-12">
                        <IconContext.Provider
                          value={{
                            color: '#FFC120',
                            className: 'global-class-name',
                          }}
                        >
                          <div className="d-flex">
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                    <div className="content--body_block--visit">
                      <Link href="/">Visit store</Link>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="content--body_block d-flex flex-wrap align-items-center justify-content-between">
                    <div className="content--body_block--image">
                      <Image
                        src="/home/bestseller.png"
                        alt="collection kids"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div>
                      <h6 className="fs-14"> Mom & Baby</h6>
                      <div className="d-flex justify-content-between fs-12">
                        <IconContext.Provider
                          value={{
                            color: '#FFC120',
                            className: 'global-class-name',
                          }}
                        >
                          <div className="d-flex">
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                    <div className="content--body_block--visit">
                      <Link href="/">Visit store</Link>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="content--body_block d-flex flex-wrap align-items-center justify-content-between">
                    <div className="content--body_block--image">
                      <Image
                        src="/home/bestseller.png"
                        alt="collection kids"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div>
                      <h6 className="fs-14"> Mom & Baby</h6>
                      <div className="d-flex justify-content-between fs-12">
                        <IconContext.Provider
                          value={{
                            color: '#FFC120',
                            className: 'global-class-name',
                          }}
                        >
                          <div className="d-flex">
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                    <div className="content--body_block--visit">
                      <Link href="/">Visit store</Link>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="content--body_block d-flex flex-wrap align-items-center justify-content-between">
                    <div className="content--body_block--image">
                      <Image
                        src="/home/bestseller.png"
                        alt="collection kids"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div>
                      <h6 className="fs-14"> Mom & Baby</h6>
                      <div className="d-flex justify-content-between fs-12">
                        <IconContext.Provider
                          value={{
                            color: '#FFC120',
                            className: 'global-class-name',
                          }}
                        >
                          <div className="d-flex">
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                    <div className="content--body_block--visit">
                      <Link href="/">Visit store</Link>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="content--body_block d-flex flex-wrap align-items-center justify-content-between">
                    <div className="content--body_block--image">
                      <Image
                        src="/home/bestseller.png"
                        alt="collection kids"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div>
                      <h6 className="fs-14"> Mom & Baby</h6>
                      <div className="d-flex justify-content-between fs-12">
                        <IconContext.Provider
                          value={{
                            color: '#FFC120',
                            className: 'global-class-name',
                          }}
                        >
                          <div className="d-flex">
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                    <div className="content--body_block--visit">
                      <Link href="/">Visit store</Link>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="content--body_block d-flex flex-wrap align-items-center justify-content-between">
                    <div className="content--body_block--image">
                      <Image
                        src="/home/bestseller.png"
                        alt="collection kids"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div>
                      <h6 className="fs-14"> Mom & Baby</h6>
                      <div className="d-flex justify-content-between fs-12">
                        <IconContext.Provider
                          value={{
                            color: '#FFC120',
                            className: 'global-class-name',
                          }}
                        >
                          <div className="d-flex">
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                    <div className="content--body_block--visit">
                      <Link href="/">Visit store</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>

      <section className="s-featured_product">
        <div className="s-featured_product__content">
          <Container>
            <div className="d-flex flex-wrap align-items-center">
              <h3 className="fw-bold pe-3">Featured Products </h3>
            </div>
            <div className="s-featured_product__content--card pt-3">
              <Row>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
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
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
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
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
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
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
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
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
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
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
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
                        <span>$15.00</span>
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
                </Col>
                <Col lg="2" md="3" sm="4" xs="6 py-3">
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
                        <span>$15.00</span>
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
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>

      <Footer />
    </>
  );
}
