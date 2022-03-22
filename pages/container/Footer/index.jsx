import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterTop, FooterBottom } from "./styles";

export default function Footer() {
  return (
    <>
      <FooterTop primary>
        <Container>
          <Row>
            <Col xxl={3}> Widget 1 </Col>
            <Col xxl={3}> Widget 2 </Col>
            <Col xxl={3}> Widget 3 </Col>
            <Col xxl={3}> Widget 4 </Col>
          </Row>
        </Container>
      </FooterTop>
      <FooterBottom>
        <Container>
          <Row>
            <Col xxl={12}>
              <p>
                <i className="lar la-copyright"></i>
                2022 Ecome. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </FooterBottom>
    </>
  );
}
