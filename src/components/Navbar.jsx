import React from "react";
import { useState } from "react";
import "../styles/Navbar.scss";
import ItemListLink from "./ItemListLink";

export default function Navbar({ isLogged = false }) {
  const [open, setOpen] = useState(false);

  function handleNavbarButton() {
    setOpen(!open);
  }

  return (
    <nav className={open ? "Navbar Navbar--open" : "Navbar"}>
      <button className="Navbar__button" onClick={handleNavbarButton}>
        <i className="material-icons">menu</i>
      </button>
      <div className="Navbar__container">
        <ul className="Navbar__list">
          <ItemListLink text="All" />
          <ItemListLink text="Clothes" />
          <ItemListLink text="Electronics" />
          <ItemListLink text="Furnitures" />
          <ItemListLink text="Toys" />
          <ItemListLink text="Others" />
          <li className="Navbar__item">
            <a className="Navbar__link" href="/">
              Clothes
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/">
              Electronics
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/">
              Furnitures
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/">
              Toys
            </a>
          </li>
          <li className="Navbar__item">
            <a className="Navbar__link" href="/">
              Others
            </a>
          </li>
          {isLogged ? (
            <li className="Navbar__item">
              <span>user@gmail.com</span>
            </li>
          ) : (
            <li className="Navbar__item">
              <span>LogIn</span>
            </li>
          )}
        </ul>
      </div>
      <div className="Navbar__overlay" onClick={handleNavbarButton}></div>
    </nav>
  );
}
