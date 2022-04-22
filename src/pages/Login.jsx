import React, {useRef} from 'react';

import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';

const Login = () => {
    const form = useRef(null); //referencia de un valor

    const handleSubmit = (event) => {
        event.preventDefault(); //prevenir que se ejecute estos eventos como html lo hace normalmente
                                //  prevenir que se ejecute esta accion y que mande los valores mediante la irl
        const formData = new FormData(form.current); //trayendo valo9res cuando se haga click en el boton
        const data = {  //se extrae los valores del input y se guarda en data para transferirla al backend
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo"/>

                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="test@example.com" className="input input-email"/>

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="********" className="input input-password"/>

                    <button type="submit" className="primary-button button-login" onClick={handleSubmit}>
                        Login
                    </button>

                    <a href="/">Forgot my password</a>
                </form>

                <button className="secondary-button signup-button">
                    Sign up
                </button>

            </div>
        </div>
    );
}

export default Login;