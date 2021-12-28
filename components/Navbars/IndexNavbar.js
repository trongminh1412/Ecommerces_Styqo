import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { userService } from 'services';
import { BiCategory, BiSearchAlt2 } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { VscClose, VscChevronDown } from 'react-icons/vsc';
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavItem,
  Button,
  Input,
  Dropdown,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

const Header = () => {
  //sticky navbar
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //scroll navbar
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      setSticky({});
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else if (window.scrollY < 160) {
      setSticky(false);
    }
  };

  // dropdown language
  const [dropdownLanguage, setOpenLanguage] = React.useState(false);
  const toggleLanguage = () => setOpenLanguage(!dropdownLanguage);
  // dropdown delivery
  const [dropdownDelivery, setOpenDelivery] = React.useState(false);
  const toggleDelivery = () => setOpenDelivery(!dropdownDelivery);
  // dropdown category
  const [dropdownCategory, setOpenCategory] = React.useState(false);
  const toggleCategory = () => setOpenCategory(!dropdownCategory);

  // login
  // const { data: session } = useSession();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  //authorized
  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ['/auth/login', '/auth/register'];
    const path = url.split('?')[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }
  if (!user) {
  }
  return (
    <>
      <div
        className="position-relative top-banner removable-session z-1035"
        data-key="top-banner"
        data-value="removed"
      >
        <Link href="/flash-deals" className="d-block text-reset" passHref>
          <Image
            src="/event.png"
            alt="7Hit Logo"
            width={1400}
            height={75}
            layout="responsive"
          />
        </Link>
        <Button
          className="btn text-white bg-transparent border-0 position-absolute top-0 end-0"
          data-key="top-banner"
          data-value="removed"
          data-toggle="remove-parent"
          data-parent=".top-banner"
        >
          <VscClose className="fs-3" />
        </Button>
      </div>
      <div className="top-navbar mt-2">
        <Container>
          <Row className="justify-content-start">
            <Col lg="2" md="6" sm="6" xs="6">
              <Dropdown isOpen={dropdownLanguage} toggle={toggleLanguage}>
                <DropdownToggle
                  caret
                  tag="div"
                  className="d-flex align-items-center"
                >
                  {''}
                  <h6 className="mb-0">English</h6>
                  <VscChevronDown />
                </DropdownToggle>
                <DropdownMenu className="mt-2">
                  <DropdownItem header>English</DropdownItem>
                  <DropdownItem>Việt Nam</DropdownItem>
                  <DropdownItem>Ả Rập</DropdownItem>
                  <DropdownItem>Hindi</DropdownItem>
                  <DropdownItem>France</DropdownItem>
                  <DropdownItem>Spain</DropdownItem>
                  <DropdownItem>Italy</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col lg="2 text-lg-start" md="6 text-md-end" sm="6" xs="6">
              <Dropdown isOpen={dropdownDelivery} toggle={toggleDelivery}>
                <DropdownToggle
                  caret
                  tag="div"
                  className="d-flex align-items-center"
                >
                  {''}
                  <h6 className="mb-0">
                    Ship to{' '}
                    <Image
                      src="/usdelivery.png"
                      alt="delivery"
                      width={15}
                      height={15}
                      layout="fixed"
                    />
                  </h6>
                  <VscChevronDown />
                </DropdownToggle>
                <DropdownMenu className="mt-2">
                  <DropdownItem header>English</DropdownItem>
                  <DropdownItem>Việt Nam</DropdownItem>
                  <DropdownItem>Ả Rập</DropdownItem>
                  <DropdownItem>Hindi</DropdownItem>
                  <DropdownItem>France</DropdownItem>
                  <DropdownItem>Spain</DropdownItem>
                  <DropdownItem>Italy</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={`header bg-light shadow-sm p-3 bg-body rounded${
          sticky ? ' sticky-top ' : ''
        }`}
      >
        <div>
          <Navbar light expand="lg">
            <Container className="d-flex justify-content-between align-content-center flex-wrap">
              <div className="col-auto pl-0 pr-3 d-flex d-none-pc-custom">
                <Image
                  src="/logo-ico.svg"
                  alt="7Hit Logo"
                  width={120}
                  height={50}
                />
              </div>
              <div className="align-self-center">
                <Dropdown isOpen={dropdownCategory} toggle={toggleCategory}>
                  <DropdownToggle
                    caret
                    tag="div"
                    className="category d-flex align-items-center"
                  >
                    <BiCategory />
                    {''}
                    <h6 className="mb-0">All Categories</h6>
                  </DropdownToggle>
                  <DropdownMenu className="mt-2">
                    <DropdownItem header>All Categories</DropdownItem>
                    <DropdownItem>Savings & Featured Shops</DropdownItem>
                    <DropdownItem>Grocery</DropdownItem>
                    <DropdownItem>Electronics</DropdownItem>
                    <DropdownItem>Clothing, shoes & Accessories</DropdownItem>
                    <DropdownItem>Baby</DropdownItem>
                    <DropdownItem>Toy & Video Games</DropdownItem>
                    <DropdownItem>Home Improvement</DropdownItem>
                    <DropdownItem>Beauty</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <div className="input-group align-items-center input-search ">
                <Input
                  type="text"
                  className="form-control form-search"
                  placeholder="Search product name"
                  aria-label="Search product name"
                  aria-describedby="basic-addon"
                />
                <Button className="input-group-text" type="submit">
                  <BiSearchAlt2 />
                </Button>
              </div>
              <div className="d-none d-lg-none ml-3 mr-0">
                <div className="nav-search-box">
                  <a href="#" className="nav-box-link">
                    <i className="la la-search la-flip-horizontal d-inline-block nav-box-icon"></i>
                  </a>
                </div>
              </div>

              <div className="d-lg-flex">
                <div id="users">
                  <FaRegUser className="fs-4" />
                </div>
                <div className="user_info ms-2">
                  <h6 className="text-warning">
                    {' '}
                    Hi {userService.userValue?.username}
                  </h6>
                  <h6>
                    {' '}
                    <a onClick={logout} href="#">
                      Account
                    </a>
                  </h6>
                </div>
              </div>

              <div className="d-lg-flex  align-self-stretch ">
                <div className="pe-2" id="wishlist">
                  <AiOutlineHeart className="fs-4" />
                </div>
                <div className="nav-cart-box" id="cart_items">
                  <HiOutlineShoppingBag className="fs-4" />
                </div>
              </div>
            </Container>
          </Navbar>
        </div>
        <div className="mt-3">
          <Container>
            <Nav>
              <NavItem className="active">
                <Link href="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link href="/">Hot Deals</Link>
              </NavItem>
              <NavItem>
                <Link href="/">Flash sale</Link>
              </NavItem>
              <NavItem>
                <Link href="/">Collection</Link>
              </NavItem>
              <NavItem>
                <Link href="/">Best Selling</Link>
              </NavItem>
              <NavItem>
                <Link href="/">Best Selling</Link>
              </NavItem>
            </Nav>
          </Container>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
export default Header;
