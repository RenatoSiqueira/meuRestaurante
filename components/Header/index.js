import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div id="header-wrapper">
      <div id="header" className="container">
        <div id="logo">
          <span className="icon icon-cogs"></span>
          <h1>
            <a href="#">Caixa de Sugestões</a>
          </h1>
          <span>
            Design by{" "}
            <a href="http://templated.co" rel="nofollow">
              TEMPLATED
            </a>
          </span>
        </div>
        <div id="menu">
          <ul>
            <li className={router.pathname === "/" ? "current_page_item" : ""}>
              <Link href="/">
                <a accessKey="1" title="">
                  Principal
                </a>
              </Link>
            </li>
            <li
              className={router.pathname === "/menu" ? "current_page_item" : ""}
            >
              <Link href="/menu">
                <a accessKey="2" title="">
                  Menu
                </a>
              </Link>
            </li>
            <li
              className={
                router.pathname === "/pesquisa" ? "current_page_item" : ""
              }
            >
              <Link href="/pesquisa">
                <a accessKey="3" title="">
                  Pesquisa
                </a>
              </Link>
            </li>
            <li
              className={
                router.pathname === "/sobre" ? "current_page_item" : ""
              }
            >
              <Link href="/sobre">
                <a accessKey="4" title="">
                  Sobre
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
