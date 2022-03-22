import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Banners() {
  return (
    <div className="ecom-banner">
      <Container>
        <Row>
          <Col xxl={8}>
            <p>Banner Image & Text</p>
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
    </div>
  );
}
