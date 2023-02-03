import React from "react";
import "../styles/Login.scss";
import LogoYarnSale from "../../public/assets/logos/logo_yard_sale.svg";

export default function Login() {
  return (
    <div className="Login">
      <img className="Login__logo" src={LogoYarnSale} alt="Logo Yard Sale" />
      <div className="Login__form-container">
        <form action="/" className="Login__form">
          <label className="Login__label" htmlFor="email">
            Email address
          </label>
          <input className="Login__input" type="text" id="email" />
          <label className="Login__label" htmlFor="password">
            Password
          </label>
          <input className="Login__input" type="password" id="password" />
          <input className="Login__button" type="submit" value="Log in" />
        </form>
        <a className="Login__link" href="/recovery-password">
          Forgot my password
        </a>
      </div>
    </div>
  );
}
