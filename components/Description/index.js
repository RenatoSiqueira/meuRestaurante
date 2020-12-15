import React from "react";

const Description = ({ title, message, image }) => (
  <section className="text-gray-700 body-font">
    <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {title}
        </h1>
        <p className="mb-8 leading-relaxed">{message}</p>
      </div>
      {image && (
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="MeuRestô"
            src={image}
          />
        </div>
      )}
    </div>
  </section>
);

export default Description;
