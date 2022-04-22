import React from 'react';
import '@styles/NotFound.scss'; 

import notFount1 from '@img/online-shop.gif';
import notFount from '@img/notfound.gif';

const NotFount = () =>{
    return(
        <div className='content-not-found'>
            <div className="row">
                <div className="col-6">
                    <img src={notFount} alt="" />
                </div>
                <div className="col-6 text">
                    <h1>Page</h1>
                    <h2>Not Found</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="/" className='button-back'>
                        <span>Go Back</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NotFount;