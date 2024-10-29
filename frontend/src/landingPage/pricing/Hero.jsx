import React from 'react';

function Hero() {
    return ( 
        <>
            <div className="container">
               <div className="row text-center text-muted mt-5 mb-5">
                  <h1>Charges</h1>
                  <p>List of all charges and taxes</p>
               </div>

               <div className="row mt-5">
                  <div className="col-4 text-center text-muted p-5">
                     <img src="/images/pricingEquity.svg" alt="" />
                     <h2>Free equity delivery</h2>
                     <p className='mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                  </div>
                  <div className="col-4 text-center text-muted p-5">
                     <img src="/images/intradayTrades.svg" alt="" />
                     <h2>Intraday and F&O trades</h2>
                     <p className='mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                  </div>
                  <div className="col-4 text-center text-muted p-5">
                     <img src="/images/pricingMF.svg" alt="" />
                     <h2>Free direct MF</h2>
                     <p className='mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                  </div>
               </div>
            </div>
        </>
     );
}

export default Hero;