import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VscChevronDown } from 'react-icons/vsc';

import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

function Language(props) {
  // dropdown language
  const [dropdownLanguage, setOpenLanguage] = React.useState(false);
  const toggleLanguage = () => setOpenLanguage(!dropdownLanguage);
  return (
    <>
      <Dropdown isOpen={dropdownLanguage} toggle={toggleLanguage}>
        <DropdownToggle caret tag="div" className="d-flex align-items-center">
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
    </>
  );
}

export default Language;
