import React from "react";
import Link from "next/link";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export default function CategoryMenu() {
  return (
    <>
      <NavBar>
        <Link href="/">
          <Menus>
            <i class="las la-bars"></i>
          </Menus>
        </Link>
      </NavBar>
    </>
  );
}
const NavBar = styled(Navbar)`
  padding: 0;
  margin: 0 0 0 50px;
  @media (max-width: 768px) {
    margin: 0 0 0 15px;
  }
  @media (max-width: 500px) {
    margin: 0 0 0 5px;
  }
`;
const Menus = styled.div`
  width: 50px;
  height: 50px;
  line-height: 58px;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  i {
    font-size: 32px;
    color: var(--dark3);
  }
  :hover {
    color: var(--orange);
  }
  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
    line-height: 52px;
  }
`;
