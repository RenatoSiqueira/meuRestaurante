import React from "react";
import useSWR from "swr";

import PageTitle from "../components/PageTitle";
import FoodItem from "../components/FoodItem";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data } = useSWR("/api/get-menu", fetcher);

  return (
    <section className="text-gray-700 body-font">
      <PageTitle title="Menu" />
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-red-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Conheça Nosso Menu
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Pratos deliciosamente preparados.
              <br />
              Refinamento e Elegância.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data?.map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
