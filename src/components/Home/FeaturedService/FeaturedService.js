import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis odit error natus aliquam repellendus labore voluptates, ad delectus dolorum? Deleniti excepturi aperiam rerum optio sapiente dolor ad. Adipisci reiciendis eius porro consequuntur minima optio esse, consectetur quam quaerat? Vitae totam dicta illum aut eligendi numquam ut, consectetur rerum velit!
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;