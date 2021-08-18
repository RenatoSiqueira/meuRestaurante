import React from "react";

const FoodItem = ({
  prato,
  desc,
  preco,
  imagem,
}) => (
  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
    <div className="rounded-lg h-64 overflow-hidden">
      <img
        alt="content"
        className="object-cover object-center h-full w-full"
        src={imagem}
      />
    </div>
    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
      <p>{prato}</p>
      <p>{preco}</p>
    </h2>
    <p className="text-base leading-relaxed mt-2">{desc}</p>
  </div>
);

export default FoodItem;
