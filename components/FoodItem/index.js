import React from "react";

const FoodItem = ({
  prato,
  desc,
  preco,
  valorDesconto,
  precoFinal,
  foto,
  instaFoto,
}) => (
  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
    <div className="rounded-lg h-64 overflow-hidden">
      <img
        alt="content"
        className="object-cover object-center h-full w-full"
        src={foto}
      />
    </div>
    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
      {prato} (<span className="font-thin text-sm line-through">{preco}</span>){" "}
      <span className="font-bold text-base text-red-700">
        Desconto: {valorDesconto}
      </span>
      <p>{precoFinal}</p>
    </h2>
    <p className="text-base leading-relaxed mt-2">{desc}</p>
    <a
      className="text-red-500 inline-flex items-center mt-3"
      target="_blank"
      href={instaFoto}
    >
      Ver no Insta
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
);

export default FoodItem;
