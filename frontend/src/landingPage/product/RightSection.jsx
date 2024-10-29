import React from 'react';

function RightSection({productName, productDescription, learnMore, imageURL}) {
    return ( 
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 mt-5">
                       <h2>{productName}</h2>
                       <p>{productDescription}</p> 
                       <a href={learnMore}>LearnMore</a>
                    </div>
                    <div className="col-lg-6">
                        <img src={imageURL} alt="" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default RightSection;