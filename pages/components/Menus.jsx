import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Menus = () => {
  return (
    <NabarMenu>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <span>
                All Categories
                <i className="las la-angle-down"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span>
                All Brands
                <i className="las la-angle-down"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span>
                All Shops
                <i className="las la-angle-down"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span>
                All Campaings
                <i className="las la-angle-down"></i>
              </span>
            </Link>
          </li>
        </ul>
      </Nav>
    </NabarMenu>
  );
};

export default Menus;

const NabarMenu = styled(Navbar)`
  ul {
    li {
      float: left;
      padding: 0 20px;
      margin-right: 10px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;
