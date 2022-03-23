import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Form } from "react-bootstrap";
import {
  HeaderTop,
  HeaderLogo,
  HeaderSearch,
  HeaderCart,
  CartIcon,
  HeaderMenu,
} from "./styles";
import CategoryMenu from "../../components/CategoryMenu";

export default function Header() {
  return (
    <>
      <HeaderTop sticky="top">
        <Container>
          <HeaderLogo>
            <Link href="/">
              <Image
                src="/logo.svg"
                width={"120px"}
                height={"50px"}
                alt="ecom logo image"
              />
            </Link>
          </HeaderLogo>

          <CategoryMenu />

          <HeaderSearch>
            <Form>
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="search" placeholder="Search here..." />
              </Form.Group>
            </Form>
          </HeaderSearch>
          <HeaderCart>
            <ul>
              <li>
                <Link href="/cart">
                  <CartIcon>
                    <i className="las la-shopping-basket"></i>
                    <span>3</span>
                  </CartIcon>
                </Link>
              </li>
              <li className="d-none d-md-block">
                <Link href="/">
                  <i className="lar la-user"></i>
                </Link>
              </li>
              <li className="d-none d-md-block">
                <Link href="/wish">
                  <i className="lar la-heart"></i>
                </Link>
              </li>
            </ul>
          </HeaderCart>
        </Container>
      </HeaderTop>

      <HeaderMenu className="d-none d-md-block">
        <Container>ok</Container>
      </HeaderMenu>
    </>
  );
}
