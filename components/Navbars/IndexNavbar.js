// import React from "react";
// import Link from "next/link";
// // components

// export default function Navbar(props) {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <>
//       <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <Link href="/">
//               <a
//                 className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
//                 href="#pablo"
//               >
//                 7HIT NextJS
//               </a>
//             </Link>
//             <button
//               className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <i className="fas fa-bars"></i>
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
//               (navbarOpen ? " block" : " hidden")
//             }
//             id="example-navbar-warning"
//           >
//             <ul className="flex flex-col lg:flex-row list-none mr-auto">
//               <li className="flex items-center">
//                 <a
//                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
//                 >
//                   <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
//                   Docs
//                 </a>
//               </li>
//             </ul>
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="flex items-center">
//                 <Link href="/auth/login">
//                   <a>login</a>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { userService } from "services";
import LanguageDropdown from "components/Dropdowns/Language";
import Delivery from "components/Dropdowns/delivery";
import { BiCategory, BiSearchAlt2 } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
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
} from "reactstrap";

const Header = () => {
  //sticky navbar
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //scroll navbar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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

  // dropdow category
  const [dropdownOpen, setOpen] = React.useState(false);
  const toggles = () => setOpen(!dropdownOpen);

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
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ["/auth/login", "/auth/register"];
    const path = url.split("?")[0];
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
      <div className="top-navbar">
        <Container>
          <Row className="justify-content-start">
            <Col lg="2" md="6" sm="6" xs="6">
              <LanguageDropdown />
            </Col>
            <Col lg="2 text-lg-start" md="6 text-md-end" sm="6" xs="6">
              <Delivery />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={`header bg-light shadow-sm p-3 bg-body rounded${
          sticky ? " sticky-top " : ""
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
                <Dropdown isOpen={dropdownOpen} toggle={toggles}>
                  <DropdownToggle
                    caret
                    tag="div"
                    className="category d-flex align-items-center"
                  >
                    <BiCategory />
                    {""}
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
                  class="form-control form-search"
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
                    {" "}
                    Hi {userService.userValue?.username}
                  </h6>
                  <h6>
                    {" "}
                    <Link href="/auth/login">Account</Link>
                  </h6>
                </div>
              </div>

              <div className="d-lg-flex  align-self-stretch ">
                <div className="pe-2" id="wishlist">
                  <AiOutlineHeart className="fs-4" />
                </div>
                <div className="nav-cart-box dropdown" id="cart_items">
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
