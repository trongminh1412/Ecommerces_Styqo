import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { VscChevronDown } from "react-icons/vsc";

const Delivery = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="fs-6"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Ship to{" "}
        <Image
          src="/usdelivery.png"
          alt="delivery"
          width={15}
          height={15}
          layout="fixed"
        />
      </a>{" "}
      <i>
        <VscChevronDown />
      </i>
      <div
        ref={popoverDropdownRef}
        className={(dropdownPopoverShow ? "d-block py-2" : "d-none py-2") + ""}
      >
        <Link href="/">
          <a href="#pablo" className={"d-block"}>
            Việt Nam
          </a>
        </Link>
      </div>
    </>
  );
};

export default Delivery;
