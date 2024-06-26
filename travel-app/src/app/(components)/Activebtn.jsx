"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: "home",
    },
    {
      id: 5,
      link: "/Tours",
      name: "Tours Packages",
    },
    {
      id: 4,
      link: "/Destination",
      name: "Destinations",
    },
    {
      id: 7,
      link: "/Accomadations",
      name: "Accomadations",
    },
    {
      id: 6,
      link: "/Transport",
      name: "Transport",
    },
    {
      id: 8,
      link: "/New&Art",
      name: "News & Articles",
    },
    {
      id: 2,
      link: "/AboutUs",
      name: "About Us",
    },
    {
      id: 3,
      link: "/Contact",
      name: "Contact Us",
    },
  ];

  const handleNavClick = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-gray-900 nav navtxt">
      <div className="flex items-center">
        <div className="mt-4">
          <Image src={"/logo.png"} alt={"logo"} width={200} height={150} />
        </div>
        {/* <div className="text-center ml-2">
      <h1 className="text-lg md:text-xl lg:text-2xl font-serif text-gray-100">ALEX DUNN</h1>
      <h1 className="text-lg md:text-xl lg:text-2xl font-serif text-gray-100">TOURS</h1>
    </div> */}
      </div>

      {/* for larger scree > md */}
      <ul className="hidden lg:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={handleNavClick}
        className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="z-50 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-lg bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link href={link} onClick={handleLinkClick}>
                {name}
              </Link>
            </li>
          ))}
          <button onClick={handleNavClick} className="absolute top-0 right-0 m-4 lg:hidden">
            <FaTimes size={30} />
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
