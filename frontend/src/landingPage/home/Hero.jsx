import React from 'react';
import './style.css';


function Hero() {
    return ( 
        <>
            <div className="container p-5">
                <div className="row text-center">
                    <img src="/images/homeHero.png" alt="" className='mb-5'/>
                    <h1 className='mt-5 '>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='heroBtn'>Signup for free</button>
                </div>
            </div>
        </>
     );
}

export default Hero;