import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="col-lg-6 mt-5 p-5">
                        <div>
                        <h1>{productName}</h1>
                        <p>{productDescription}</p>
                        </div>
                        <div className='mt-3'>
                        <a href={tryDemo}>TryDemo</a>
                        <a href={learnMore}>Learn More</a>
                        <br /><br />
                        <a href={googlePlay}><img src="/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore}><img src="/images/appstoreBadge.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default LeftSection;