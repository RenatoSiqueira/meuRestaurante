import React from "react";
import Image from "next/image";

const Coupons = ({ text }) => (
  <div className="max-w-md mx-auto py-10 mt-10 px-8 bg-white shadow-lg rounded-lg">
    <div className="flex justify-center md:justify-end -mt-16">
      <Image
        className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        alt="Promo Image"
        src="/form.jpg"
        width={76}
        height={80}
      />
    </div>
    <h2 className="text-gray-800 text-2xl mt-2 md:mt-0 md:text-3xl font-semibold">
      Promoção!
    </h2>
    <p className="mt-2 text-gray-600">{text}</p>
    <div className="flex justify-end mt-4 text-xl font-medium text-indigo-500">
      Meu Restô
    </div>
  </div>
);

export default Coupons;
