import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="my-account">
            <div className="form-container">
            
                <h1 className="title">My account</h1>
            
                <form action="" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" id="name" placeholder="Eliana" className="input input-name"/>
                        
                        <label htmlFor="email" className="label">email</label>
                        <input type="text" id="email" placeholder="text@example.com" className="input input-password"/>

                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="********" className="input input-password"/>
                    </div>

                    <input type="submit" value="create" className="primary-button button-login"/>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;