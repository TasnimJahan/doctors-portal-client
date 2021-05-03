import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi sint quia nostrum nesciunt. Repellat?</p>
                <button className="btn btn-primary"><a style={{color:'white', textDecoration:'none'}} href="https://rocky-forest-80852.herokuapp.com/appointment">GET APPOINTMENT</a></button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;