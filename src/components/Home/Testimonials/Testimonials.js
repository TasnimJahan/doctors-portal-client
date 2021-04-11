import React from 'react';
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import eliza from '../../../images/eliza.png'
import TestimonialDataDescription from '../TestimonialDataDescription/TestimonialDataDescription';
import quote from '../../../images/quote.png'
const testimonialData = [
    {
        quote: "orem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis odit error natus aliquam repellendus labore voluptates, ad delectus dolorum? ",
        name: "Wilson Harry",
        from: "California",
        img: wilson
    },
    {
        quote: "orem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis odit error natus aliquam repellendus labore voluptates, ad delectus dolorum? ",
        name: "Ema Gomez",
        from: "California",
        img: ema
    },
    {
        quote: "orem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis odit error natus aliquam repellendus labore voluptates, ad delectus dolorum?",
        name: "Aliza Farari",
        from: "California",
        img: eliza
    }
]
const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header d-flex justify-content-between">
                    <div>
                        <h5 className="text-primary text-uppercase">Testimonial</h5>
                        <h1>What's Our Patients <br/>Says </h1>
                    </div>
                    <div className="quote">
                        <img style={{height:'10em'}} src={quote} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        testimonialData.map(testimonial=> <TestimonialDataDescription testimonial={testimonial}></TestimonialDataDescription>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;