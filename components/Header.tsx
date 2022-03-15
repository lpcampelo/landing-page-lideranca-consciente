import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

export const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  typeof window !== "undefined"
    ? window.addEventListener("resize", showButton)
    : null;

  return (
    <>
      <nav className="header">
        <div className="logo-container">
          <Link href="/">
            <a className="navbar-logo" onClick={closeMobileMenu}>
              <Image
                width="27.81"
                height="33.16"
                className="header-logo-img"
                alt="logo-marcela"
                src="/logo-marcela-franca.png"
              />
            </a>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
};
