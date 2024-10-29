import React from 'react';

function Education() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/education.svg" alt="" />
                    </div>
                    <div className="col-6">
                        <h2 className='mb-4'>Free and open market education</h2>

                        <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="" className='statsLink' >Varsity</a>


                        <p className='mb-4 mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="" className='statsLink mb-2'>TradingQ&A </a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Education;