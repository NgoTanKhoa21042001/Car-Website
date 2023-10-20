"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  return <div>Header</div>;
};

export default Header;
