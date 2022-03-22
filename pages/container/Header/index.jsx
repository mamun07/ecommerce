import React from "react";
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
} from "./styles";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <HeaderTop>
        <Container>
          <Row>
            <Col xxl={3}>
              <div className="notice text-left">Left</div>
            </Col>
            <Col xxl={6}>
              <div className="notice text-center">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: ["Center Text"],
                  }}
                />
              </div>
            </Col>
            <Col xxl={3}>
              <div className="notice text-end">Right</div>
            </Col>
          </Row>
        </Container>
      </HeaderTop>

      <HeaderBottom>
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="d-flex align-items-center justify-content-between header-menu">
                <HeaderLogo>
                  <a href="/">
                    <Image
                      src="/logo.svg"
                      alt="image"
                      width={"120px"}
                      height={"50px"}
                    />
                  </a>
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
                    <li>
                      <Link href="/">
                        <i className="lar la-user"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wish">
                        <i className="lar la-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </HeaderCart>
              </div>
            </Col>
          </Row>
        </Container>
      </HeaderBottom>
    </>
  );
}
