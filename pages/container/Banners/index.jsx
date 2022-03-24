import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "./styles";
import Slider from "../../components/Slider";
import styled from "styled-components";
import Image from "next/image";

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
              <Col xxl={6} className="mb-3">
                <CategThumb>
                  <Image src="/images/1.jpg" width={300} height={300} />
                  <h2>Men Shoe</h2>
                </CategThumb>
              </Col>
              <Col xxl={6} className="mb-3">
                <CategThumb>
                  <Image src="/images/1.jpg" width={300} height={300} />
                  <h2>Men Shoe</h2>
                </CategThumb>
              </Col>
              <Col xxl={6} className="mb-3">
                <CategThumb>
                  <Image src="/images/1.jpg" width={300} height={300} />
                  <h2>Men Shoe</h2>
                </CategThumb>
              </Col>
              <Col xxl={6} className="mb-3">
                <CategThumb>
                  <Image src="/images/1.jpg" width={300} height={300} />
                  <h2>Men Shoe</h2>
                </CategThumb>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Banner>
  );
}

const CategThumb = styled.div``;
