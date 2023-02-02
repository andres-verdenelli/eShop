import React from 'react'
import { useState } from 'react'
import '../styles/Navbar.scss'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    function handleNavbarButton() {
        setOpen(!open)
    }

    return (
        <nav className={open ? 'Navbar Navbar--open' : 'Navbar'}>
            <button className='Navbar__button' onClick={handleNavbarButton}>
                <i className='material-icons'>menu</i>
            </button>
            <div className='Navbar__container'>
                <ul className='Navbar__list'>
                    <li className='Navbar__item'>
                        <a className='Navbar__link' href="/">All</a>
                    </li>
                    <li className='Navbar__item'>
                        <a className='Navbar__link' href="/">Clothes</a>
                    </li>
                    <li className='Navbar__item'>
                        <a className='Navbar__link' href="/">Electronics</a>
                    </li>
                    <li className='Navbar__item'>
                        <a className='Navbar__link' href="/">Furnitures</a>
                    </li>
                    <li className='Navbar__item'>
                        <a className='Navbar__link' href="/">Toys</a>
                    </li>
                    <li className='Navbar__item'>
                        <a className='Navbar__link' href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className='Navbar__overlay' onClick={handleNavbarButton}></div>
        </nav>
    )
}

export default Navbar