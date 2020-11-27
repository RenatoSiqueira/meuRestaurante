import React from "react";
import Link from "next/link";

const Temp = ({ children }) => (
  <>
    <link rel="stylesheet" href="/anotherLayout.css" />
    <header id="header">
      <Link href="/">
        <span className="avatar">
          <img src="anotherimages/avatar.jpg" alt="" />
        </span>
      </Link>
      <h1>
        This is <strong>Visualize</strong>, a responsive site template designed
        by <a href="http://templated.co">TEMPLATED</a>
        <br />
        and released for free under the Creative Commons License.
      </h1>
      <ul className="icons">
        <li>
          <a href="#" className="icon style2 fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon style2 fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon style2 fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon style2 fa-500px">
            <span className="label">500px</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon style2 fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </header>

    {children}

    <section id="main">
      <section className="thumbnails">
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

export default Temp;
