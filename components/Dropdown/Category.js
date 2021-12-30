import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiCategory } from 'react-icons/bi';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

function Category(props) {
  const [dropdownCategory, setOpenCategory] = React.useState(false);
  const toggleCategory = () => setOpenCategory(!dropdownCategory);

  return (
    <>
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
    </>
  );
}

export default Category;
