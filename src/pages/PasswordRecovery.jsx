import React from 'react';
import '@styles/PasswordRecovery.scss';
const PasswordRecovery = () => {
    return (
        <div className="create-account">
            <div className="form-container">
                <img src="assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Create a new Password</h1>
                <p className="subtitle">Enter a new password for tue account</p>
                <form  className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="********" className="input input-password" />

                    <label htmlFor="new-password" className="label">Re-enter Password</label>
                    <input type="password" id="new-password" placeholder="********" className="input input-password" />

                    <input type="submit" value="confirm" className="primary-button button-login"/>
                </form>
            </div>
        </div>
    );
}

export default PasswordRecovery;