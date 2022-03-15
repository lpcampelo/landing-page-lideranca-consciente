import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import styles from "../styles/header.module.scss";

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
      <nav className={styles.header}>
        <div className={styles.container_logo}>
          <Link href="/">
            <a  onClick={closeMobileMenu}>
              <Image
                width="27.81"
                height="33.16"
                alt="logo-marcela"
                src="/logo-marcela-franca.png"
              />
            </a>
          </Link>
          </div>
          <div className={styles.container_botoes}>
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              path="/"
              onClick={() => click}
            >
              Quem será sua professora?
            </Button>
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              path="/"
              onClick={() => click}
            >
              Mas Marcela, eu...
            </Button>
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              path="/"
              onClick={() => click}
            >
              O que eles dizem
            </Button>
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              path="/"
              onClick={() => click}
            >
              Curso
            </Button>
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              path="/"
              onClick={() => click}
            >
              F.A.Q
            </Button>
          </div>
        {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
      </nav>
    </>
  );
};
