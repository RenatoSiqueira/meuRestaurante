import React from "react";
import "../css/styles.css";

import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
