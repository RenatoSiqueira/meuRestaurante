import React from "react";

import LinkItem from "../../elements/linkItem";

const Header = () => (
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
          className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Meu Restô</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <LinkItem text="Principal" link="/" />
        <LinkItem text="Menu" link="/menu" />
        <LinkItem text="Sobre" link="/sobre" />
      </nav>
      <a
        href="https://api.whatsapp.com/send?phone=SEUNUMERO&text=TEXTO TESTE"
        target="blank"
        className="text-white"
      >
        <button className="inline-flex items-center bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          Contato
        </button>
      </a>
    </div>
  </header>
);

export default Header;
