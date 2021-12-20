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
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  // login
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <div className={`header${sticky ? " sticky" : ""}`}>
        <Navbar light expand="lg">
          <Container className="d-flex">
            <Image
              src="/logo-ico.svg"
              alt="7Hit Logo"
              width={120}
              height={50}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="m-auto" navbar>
                <NavItem>
                  <Link href="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link href="#About">About</Link>
                </NavItem>
                <NavItem>
                  <Link href="#Services">Services</Link>
                </NavItem>
                <NavItem>
                  <Link href="/auth/login">Login</Link>
                </NavItem>

                {session ? (
                  <>
                    <NavItem>
                      <Button onClick={() => signOut()}>Log out</Button>
                    </NavItem>

                    <NavItem>Hi {session.user.name}</NavItem>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <Button
                        onClick={() => {
                          router.push("/api/auth/signin");
                        }}
                      >
                        Sign in
                      </Button>
                    </NavItem>
                    <NavItem>Welcome</NavItem>
                  </>
                )}
              </Nav>
            </Collapse>
            <NavbarToggler className="navbar-toggler" onClick={toggle} />
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
