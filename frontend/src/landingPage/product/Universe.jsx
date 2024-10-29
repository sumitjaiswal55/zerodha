import React from 'react';
import '../home/style.css'
function Universe() {
    return ( 
        <>
            <div className="container">
                <div className="row text-center mt-5 mb-5">
                    <h5>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
                </div>
                <div className="row text-center">
                    <h2 className='mb-4'>The Zerodha Universe</h2>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className="row">
                    <div className="col-4 p-3 mb-3 text-center text-muted" style={{fontSize: "12px"}}>
                           <img src="/images/zerodhaFundhouse.png" alt="" style={{height: "55px"}} />
                           <p className='mt-3'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>
                    <div className="col-4 p-3 mb-3 text-center text-muted" style={{fontSize: "12px"}}>
                           <img src="/images/sensibullLogo.svg" alt="" style={{height: "55px"}}/>
                           <p className='mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className="col-4 p-3 mb-3 text-center text-muted" style={{fontSize: "12px"}}>
                           <img src="/images/goldenpiLogo.png" alt="" style={{height: "55px"}}/>
                           <p className='mt-3'>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.</p>
                    </div>
                

                    <div className="col-4 p-3 mb-3 text-center text-muted" style={{fontSize: "12px"}}>
                           <img src="/images/streakLogo.png" alt=""style={{height: "55px"}} />
                           <p className='mt-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className="col-4 p-3 mb-3 text-center text-muted" style={{fontSize: "12px"}}>
                           <img src="/images/smallcaseLogo.png" alt="" style={{height: "55px"}}/>
                           <p className='mt-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                    <div className="col-4 p-3 mb-3 text-center text-muted" style={{fontSize: "12px"}}>
                           <img src="/images/dittoLogo.png" alt="" style={{height: "55px"}}/>
                           <p className='mt-3'>Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free</p>
                    </div>
                    </div>
                <div className="row">
                    <button className='heroBtn center mt-3 mb-5'>Signup for free</button>
                </div>
            </div>
        </>
     );
}

export default Universe;