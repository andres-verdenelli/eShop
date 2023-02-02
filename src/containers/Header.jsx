import React from 'react'
import '../styles/Header.scss'
import LogoYardSale from '../../public/assets/logos/logo_yard_sale.svg'
import Navbar from '../components/Navbar'
import IconShoppingCart from '../../public/assets/icons/icon_shopping_cart.svg'

const Header = () => {
    return (
        <>
            <header className='Header'>
                <Navbar />
                <img className="Header__logo" src={LogoYardSale} alt="Logo" />
                <img className='Header__cart' src={IconShoppingCart} alt="Shopping cart" />
            </header>
        </>
    )
}
export default Header