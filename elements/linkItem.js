import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LinkItem = ({ text, link }) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <a
        className={`mr-5 capitalize  ${
          router.pathname === link
            ? "bg-red-300 px-2 pt-5 text-white font-bold hover:text-white"
            : "hover:text-red-500 text-gray-700"
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default LinkItem;
