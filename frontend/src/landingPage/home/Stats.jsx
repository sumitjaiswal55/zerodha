import React from 'react';

function Stats() {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className='mb-5'>Trust with confidence</h2>
                            <h4>Cusstomer frist-always</h4>
                            <p className='mb-4 text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                        <h4>No spam or gimmicks</h4>
                        <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>  
                        <h4>The Zerodha universe</h4>
                        <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>  
                        <h4>Do better with money</h4>
                        <p className='mb-4 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src="/images/ecosystem.png" alt="" className='statsImg'/>
                        <div className="text-center">
                            <a href="" className='statsLink'>Explore our products</a>&nbsp; &nbsp;
                            <a href="" className='statsLink'>Try Kite Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Stats;