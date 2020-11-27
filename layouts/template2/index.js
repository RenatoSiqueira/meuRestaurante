import React from "react";
import Link from "next/link";

const Temp = ({ children }) => (
  <>
    <link rel="stylesheet" href="/layout2assets/css/main.css" />
    <header id="header">
      <div className="inner">
        <div className="content">
          <h1>Radius</h1>
          <h2>
            A fully responsive masonry-style
            <br />
            portfolio template.
          </h2>
          <a href="#" className="button big alt">
            <span>Let's Go</span>
          </a>
        </div>
        <a href="#" className="button hidden">
          <span>Let's Go</span>
        </a>
      </div>
    </header>

    <div id="main">
      <div className="inner">
        <div className="columns">
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic01.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic02.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic03.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic04.jpg" alt="" />
            </a>
          </div>

          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic06.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic05.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic08.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic07.jpg" alt="" />
            </a>
          </div>

          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic09.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic12.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic11.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic10.jpg" alt="" />
            </a>
          </div>

          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic13.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic14.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic15.jpg" alt="" />
            </a>
          </div>
          <div className="image fit">
            <a href="detail1.html">
              <img src="layout2images/pic16.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer id="footer">
      <a href="#" className="info fa fa-info-circle">
        <span>About</span>
      </a>
      <div className="inner">
        <div className="content">
          <h3>Vestibulum hendrerit tortor id gravida</h3>
          <p>
            In tempor porttitor nisl non elementum. Nulla ipsum ipsum, feugiat
            vitae vehicula vitae, imperdiet sed risus. Fusce sed dictum neque,
            id auctor felis. Praesent luctus sagittis viverra. Nulla erat nibh,
            fermentum quis enim ac, ultrices euismod augue. Proin ligula nibh,
            pretium at enim eget, tempor feugiat nulla.
          </p>
        </div>
        <div className="copyright">
          <h3>Follow me</h3>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-dribbble">
                <span className="label">Dribbble</span>
              </a>
            </li>
          </ul>
          &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>.
          Images: <a href="https://unsplash.com/">Unsplash</a>.
        </div>
      </div>
    </footer>
    <script src="layout2assets/js/jquery.min.js"></script>
    <script src="layout2assets/js/skel.min.js"></script>
    <script src="layout2assets/js/util.js"></script>
    <script src="layout2assets/js/main.js"></script>
  </>
);

export default Temp;
