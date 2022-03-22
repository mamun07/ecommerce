import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "./styles";
import Slider from "../../components/Slider";

export default function Banners() {
  return (
    <Banner>
      <Container>
        <Row>
          <Col xxl={8}>
            <Slider />
          </Col>
          <Col xxl={4} className="text-center">
            <Row>
              <Col xxl={6}>
                <p>Category Thumb 1</p>
              </Col>
              <Col xxl={6}>
                <p>Category Thumb 2</p>
              </Col>
              <Col xxl={6}>
                <p>Category Thumb 3</p>
              </Col>
              <Col xxl={6}>
                <p>Category Thumb 4</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Banner>
  );
}
