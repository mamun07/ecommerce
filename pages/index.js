import Head from "next/head";
import Banners from "./container/Banners";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Banners />

        <Container>
          <h6>Top Brand</h6>
          <h6>New Products</h6>
          <h6>Offer Banner</h6>
          <h6>Daily Deals</h6>
          <h6>Home Dacore</h6>
          <h6>Campaine Banner</h6>
          <h6>Policy</h6>
        </Container>
      </main>
    </>
  );
}
