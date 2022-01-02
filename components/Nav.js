import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

//console.log(Object.entries(requests));

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }], index) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition-all duration-100 hover:scale-125 hover:text-white active:text-red-500"
            key={index}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#122329] h-10 w-1/12"></div>
    </nav>
  );
};

export default Nav;
