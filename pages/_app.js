import React from "react";
import "../css/styles.css";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
const OutroLayout = ({ children }) => {
  return (
    <>
      <link rel="stylesheet" href="/anotherLayout.css" />
      <header id="header">
        <span class="avatar">
          <img src="anotherimages/avatar.jpg" alt="" />
        </span>
        <h1>
          This is <strong>Visualize</strong>, a responsive site template
          designed by <a href="http://templated.co">TEMPLATED</a>
          <br />
          and released for free under the Creative Commons License.
        </h1>
        <ul class="icons">
          <li>
            <a href="#" class="icon style2 fa-twitter">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon style2 fa-facebook">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon style2 fa-instagram">
              <span class="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon style2 fa-500px">
              <span class="label">500px</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon style2 fa-envelope-o">
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
      </header>

      {children}

      <section id="main">
        <section class="thumbnails">
          <div>
            <a href="anotherimages/fulls/01.jpg">
              <img src="anotherimages/thumbs/01.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </a>
            <a href="anotherimages/fulls/02.jpg">
              <img src="anotherimages/thumbs/02.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </a>
          </div>
          <div>
            <a href="anotherimages/fulls/03.jpg">
              <img src="anotherimages/thumbs/03.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </a>
            <a href="anotherimages/fulls/04.jpg">
              <img src="anotherimages/thumbs/04.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </a>
            <a href="anotherimages/fulls/05.jpg">
              <img src="anotherimages/thumbs/05.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </a>
          </div>
          <div>
            <a href="anotherimages/fulls/06.jpg">
              <img src="anotherimages/thumbs/06.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </a>
            <a href="anotherimages/fulls/07.jpg">
              <img src="anotherimages/thumbs/07.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </a>
          </div>
        </section>
      </section>
      <footer id="footer">
        <p>
          &copy; Untitled. All rights reserved. Design:{" "}
          <a href="http://templated.co">TEMPLATED</a>. Demo Images:{" "}
          <a href="http://unsplash.com">Unsplash</a>.
        </p>
      </footer>
    </>
  );
};

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  if (router.pathname === "/sobre") {
    return (
      <OutroLayout>
        <Component {...pageProps} />
      </OutroLayout>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
