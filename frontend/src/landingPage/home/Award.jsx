import React from 'react';
import './style.css';

function Award() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 p-5">
                        <img src="/images/largestBroker.svg" alt="" className='awardImg'/>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-5 mt-4">
                        <h2>Largest stock broker in India</h2>
                        <p className='mb-5'> 2+million Zerodha clients contributed to over 15% of all retail order volumes in India daily by trading and investing in</p>
                        <div className="row mt-5">
                            <div className="col-6">
                            <ul>
                            <li>Future and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Current derivatives</li>
                            </ul>
                            </div>
                            <div className="col-6">
                            <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct Mutual funds</li>
                            <li>Bonds and Gold</li>
                            </ul>
                            </div>
                            <img src="/images/pressLogos.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
     );
}

export default Award;