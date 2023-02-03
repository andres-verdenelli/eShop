import React from "react";
import "../styles/NavbarUser.scss";
// import ShoppingCartIcon from '../../public/assets/icons/icon_shopping_cart.svg'

export default function NavbarUser() {
  return (
    <div className="NavbarUser">
      <ul className="NavbarUser__list">
        {/* <li className="nav__email">example@example.com</li> */}
        <li>
          <a
            className="NavbarUser__button NavbarUser__button--primary"
            href="/login"
          >
            Log in
          </a>
        </li>
        <li>
          <a
            className="NavbarUser__button NavbarUser__button--secondary"
            href="/create-account"
          >
            Sign In
          </a>
        </li>
        {/* <li className="nav__shopping-cart">
                        <img src={ShoppingCartIcon} alt="shopping cart" />
                        <div className='nav__shopping-cart--counter'>2</div>
                    </li> */}
      </ul>
    </div>
  );
}
// {/* <div>
//                     {isLoggedIn ? (
//                         <AdminPanel />
//                     ) : (
//                         <LoginForm />
//                     )}
//                 </div> */}

// {/* <div>
//                     {isLoggedIn && <AdminPanel />}
//                 </div> */}
