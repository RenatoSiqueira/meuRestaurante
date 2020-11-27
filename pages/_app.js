import React from "react";
import "../css/styles.css";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Layout1 from "../layouts/template1";
import Layout2 from "../layouts/template2";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  if (router.pathname === "/sobre") {
    return (
      <Layout1>
        <Component {...pageProps} />
      </Layout1>
    );
  }
  if (router.pathname === "/teste") {
    return (
      <Layout2>
        <Component {...pageProps} />
      </Layout2>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
