import React from "react";
import Image from "next/image";

import PageTitle from "../components/PageTitle";

const Sobre = () => (
  <section className="text-gray-700 body-font">
    <PageTitle title="Sobre o meuRestô" />
    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded"
          alt="Sobre"
          src="/sobre.jpg"
          width={720}
          height={600}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Meu Restô
        </h1>
        <p className="mb-8 leading-relaxed">
          Este é uma versão adaptada do <strong>PalpiteBox</strong>; um projeto
          que utiliza <strong>NextJs, TailwindCSS, MomentJS, </strong>
          integração realtime com o <strong>Google Spreadsheet</strong>.
        </p>
        <p className="mt-2">
          Construido passo a passo no <strong> FullStackMaster Premium</strong>.
        </p>
        <div className="flex justify-center mt-4">
          <a href="https://go.devpleno.com/fsm" target="_blank">
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Acessar Curso
            </button>
          </a>
          <a href="https://devpleno.com/" target="_blank">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Acessar Site
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Sobre;
