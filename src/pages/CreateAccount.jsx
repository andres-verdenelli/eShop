import React from 'react'
import '../styles/CreateAccount.scss'

const CreateAccount = () => {
    return (
        <div className="CreateAccount">
            <h1 className="CreateAccount__title">Sign In</h1>
            <form action="/" className="CreateAccout__form">
                <div className='CreateAccount__form-container'>
                    <label className="CreateAccount__label" htmlFor="name">Name</label>
                    <input className="CreateAccount__input" type="text" id="name" />
                    <label className="CreateAccount__label" htmlFor="email">Email</label>
                    <input className="CreateAccount__input" type="text" id="email"/>
                    <label className="CreateAccount__label" htmlFor="password">Password</label>
                    <input className="CreateAccount__input" type="password" id="password"/>
                </div>
                <input className="CreateAccount__button" type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default CreateAccount