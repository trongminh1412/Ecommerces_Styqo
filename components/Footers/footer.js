import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container, Col, Row, Input, Button } from 'reactstrap';

function footer(props) {
  return (
    <>
      <section className="footer-widget py-5 bg-opacity-10">
        <Container>
          <Row>
            <Col lg="5" xl="4" className="mb-md-3 text-center text-md-start">
              <div className="mt-1">
                <div className="pb-3">
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src="/footer/f-logo.png"
                        alt="collection kids"
                        layout="intrinsic"
                        width={111}
                        height={40}
                      />
                    </a>
                  </Link>
                </div>
                <div className="my-4 fs-14">
                  Blockchain based E-commerce Platform
                  <div>Fast - Convenient - Secure</div>
                </div>
                <div className="d-inline-block d-md-block mb-4">
                  <div className="input-group align-items-center">
                    <Input
                      type="text"
                      className="form-control form-footer"
                      placeholder="Your Email Address"
                      aria-label="Search product name"
                      aria-describedby="basic-addon"
                    />
                    <Button className="input-group-text" type="submit">
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="d-inline-flex mx-auto mx-md-0">
                  <div className="d-inline-block me-3 ms-0">
                    <Link href="/">
                      <a>
                        <Image
                          src="/footer/f-ggplay.png"
                          alt="collection kids"
                          layout="intrinsic"
                          width={109}
                          height={32}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="d-inline-block me-3 ms-0">
                    <Link href="/">
                      <a>
                        <Image
                          src="/footer/f-appstore.png"
                          alt="collection kids"
                          layout="intrinsic"
                          width={109}
                          height={32}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="4" className="ms-xl-auto mr-0">
              <div className="text-start">
                <h4 className="text-uppercase fs-14 fw-bold mb-4">
                  Contact Info
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <span className="d-block fs-12 text-contact-span mb-1">
                      Address:
                    </span>
                    <span className="fs-12">
                      27, Old Gloucester Street, London, WC1N 3AX, United
                      Kingdom
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className="d-block fs-12 text-contact-span mb-1">
                      Email:
                    </span>
                    <span className="fs-12">
                      <a className="text-reset">info@7hit.com</a>
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className="fs-12 text-contact-span">Channel:</span>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link href="/">
                          <a>
                            <Image
                              src="/footer/f-facebook.png"
                              alt=""
                              layout="intrinsic"
                              width={30}
                              height={30}
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="/">
                          <a>
                            <Image
                              src="/footer/f-twitter.png"
                              alt="collection kids"
                              layout="intrinsic"
                              width={30}
                              height={30}
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="/">
                          <a>
                            <Image
                              src="/footer/f-youtube.png"
                              alt="collection kids"
                              layout="intrinsic"
                              width={30}
                              height={30}
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="/">
                          <a>
                            <Image
                              src="/footer/f-telegram.png"
                              alt="collection kids"
                              layout="intrinsic"
                              width={30}
                              height={30}
                            />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="2" md="4">
              <div className="text-start">
                <h4 className="text-uppercase fs-14 fw-bold mb-4">
                  Customer service
                </h4>
                <ul className="list-unstyled fs-14">
                  <li className="mb-2">
                    <Link href="/">Support Center</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/">How to Buy</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/">Buyer Protection</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/">Transaction Services Agreement</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/">Seller Policy</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/">Affiliate Support</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="2" md="4">
              <div className="text-md-start text-center">
                <h4 className="text-uppercase fs-14 fw-bold mb-4">
                  Be a Seller
                </h4>
                <a className="btn btn-sm shadow-md button_custom mb-5">
                  Apply Now
                </a>
                <div className="bottom-0 mb-auto mt-5 pt-5">
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Link href="/">
                            <a>
                              <Image
                                src="/footer/f-paypal.png"
                                alt=""
                                layout="intrinsic"
                                width={60}
                                height={16}
                              />
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/">
                            <a>
                              <Image
                                src="/footer/f-visa.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={43}
                                height={14}
                              />
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/">
                            <a>
                              <Image
                                src="/footer/f-mastercard.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={26}
                                height={16}
                              />
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/">
                            <a>
                              <Image
                                src="/footer/f-maestro.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={26}
                                height={16}
                              />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer-copyright bg-light bg-opacity-10 py-2">
        <div className="container">
          <div className="text-center fs-14">
            © 2021 - Copyright of 7Hit.com
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
