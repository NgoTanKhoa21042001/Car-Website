"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../../public/assets/icons/logo.svg";
import { BiX, BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(header);
  return (
    <div
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } w-full fixed max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link href={"/"} className="cursor-pointer">
            <Image src={logo} width={194} height={64} alt="" />
          </Link>
          {/* nav open menu */}
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* Nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-200 text-center uppercase xl:text-left text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            href={"/"}
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            href={"/cars"}
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            href={"/about"}
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            href={"/why"}
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            className="cursor-pointer"
            href={"/testimonials"}
            smooth={desktopMode}
            spy={true}
          >
            Testinomials
          </Link>
          <Link
            className="cursor-pointer"
            href={"/contact"}
            smooth={desktopMode}
            spy={true}
          >
            Contacts
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            href={"/"}
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
