import React from "react";
import Head from "next/head";
import Footer from "./container/Footer";
import Header from "./container/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import { GlobalStyle } from "../styles/globals";
import "swiper/css";
import "swiper/css/pagination";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  );
}
