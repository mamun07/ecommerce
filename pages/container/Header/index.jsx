import React from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  HeaderTop,
  HeaderBottom,
  HeaderLogo,
  HeaderSearch,
  HeaderCart,
  CartIcon,
  TopInfo,
  TopMenu,
} from "./styles";

export default function Header() {
  return (
    <>
      <HeaderTop>
        <Container>
          <Row>
            <Col className="d-none d-md-block" md={4}>
              <TopInfo>
                <ul>
                  <li>
                    <a href="tel:6546-56565">
                      <i className="las la-headphones"></i> 6546-56565
                    </a>
                  </li>
                  <li>
                    <a href="mailto:6546-56565">
                      <i className="lar la-envelope"></i> 6546-56565
                    </a>
                  </li>
                </ul>
              </TopInfo>
            </Col>
            <Col xs={12} md={4}>
              <div className="notice text-center">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: ["ঈদের প্রি-অর্ডার নেয়া হবে ১০ এপ্রিল পর্যন্ত"],
                  }}
                />
              </div>
            </Col>
            <Col className="d-none d-md-block" md={4}>
              <TopMenu>
                <ul>
                  <li>
                    <a href="tel:6546-56565">
                      <i className="las la-info-circle"></i> Helps
                    </a>
                  </li>
                  <li>
                    <a href="mailto:6546-56565">
                      <i className="las la-hands-helping"></i> Contact us
                    </a>
                  </li>
                </ul>
              </TopMenu>
            </Col>
          </Row>
        </Container>
      </HeaderTop>

      <HeaderBottom sticky="top">
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
          <HeaderSearch>
            <Form>
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="text" placeholder="Search here..." />
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
      </HeaderBottom>
    </>
  );
}
