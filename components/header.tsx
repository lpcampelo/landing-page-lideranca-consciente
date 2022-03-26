import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.scss";
import { Botao } from "./botao";

export const Header = () => {
  return (
    <>
      <nav className={styles.header}>
          <div className={styles.container_logo}>
            <Image
              width={230}
              height={50}
              src="/assinatura1.png"
              alt="assinatura"
              layout="intrinsic"
              objectFit="contain"
              priority
            />
          </div>
          <div className={styles.container_botoes}>
            <div>
              <a
                className="social-icon-link facebook"
                href="https://www.facebook.com/marcela.f.franca1"
                rel="noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="social-icon-link instagram"
                href="https://www.instagram.com/marcela.f.franca/"
                rel="noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="social-icon-link youtube"
                href="https://www.youtube.com/channel/UC8BUaWz7GuACz0HSdTPcrHA"
                rel="noreferrer"
                target="_blank"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                className="social-icon-link twitter"
                href="https://twitter.com/marcelaffranca"
                rel="noreferrer"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>

              <a
                className="social-icon-link linkedin"
                href="https://www.linkedin.com/in/marcela-flores"
                rel="noreferrer"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
      </nav>
    </>
  );
};
