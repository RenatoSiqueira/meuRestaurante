import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const LinkItem = ({ text, link }) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <a
        className={`mr-5 hover:text-gray-900 capitalize text-purple-800 ${
          router.pathname === link ? "bg-purple-300 px-2 pt-5" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

const Header = () => (
  <>
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <div className={styles.divSocial}>TESTE</div>
          <span className="ml-3 text-xl">NOME DO RESTAURANTE</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <LinkItem text="Principal" link="/" />
          <LinkItem text="Menu" link="/menu" />
          <LinkItem text="Pesquisa" link="/pesquisa" />
          <LinkItem text="Sobre" link="/sobre" />
        </nav>
        <a
          href="https://api.whatsapp.com/send?phone=SEUNUMERO&text=TEXTO TESTE"
          target="blank"
          className="text-purple-800"
        >
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Contato
          </button>
        </a>
      </div>
    </header>
    {/* <div id="header-wrapper">
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
              <li
                className={router.pathname === "/" ? "current_page_item" : ""}
              >
                <Link href="/">
                  <a accessKey="1" title="">
                    Principal
                  </a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/menu" ? "current_page_item" : ""
                }
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
      </div> */}
  </>
);

export default Header;
