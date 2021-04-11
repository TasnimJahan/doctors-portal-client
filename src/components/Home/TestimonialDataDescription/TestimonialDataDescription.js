import React from 'react';

const TestimonialDataDescription = ({testimonial}) => {
    return (
        <div class="col-sm-4">
            <div class="card" style={{boxShadow: '0px 1px 2px 1px lightgrey',padding: '3%',margin: '2% 3%'}}>
                <div class="mb-4 card-body">
                    <p style={{textAlign: 'justify'}} class="card-text fs-5 text-secondary">{testimonial.quote}</p>
                </div>
                <div className="d-flex p-4">
                    <div className="testimonialImg me-2">
                        <img style={{width:'70%'}} src={testimonial.img} alt="" className="img-fluid"/>
                    </div>
                    <div className="address">
                        <h5 className="text-primary">{testimonial.name}</h5>
                        <small>{testimonial.from}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDataDescription;