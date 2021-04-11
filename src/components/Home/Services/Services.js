import React from 'react';
import fluoride from '../../../images/fluoride.png'
import teeth from '../../../images/teeth.png'
import cavity from '../../../images/cavity.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride
    },
    {
        name: 'Cavity Filing',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        image: teeth
    }
];
const Services = () => {
    return (
        <section className="service-container">
            <div className="text-center mb-3 mt-5">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color: '#3A4256'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-85 mt-5">
                    {
                        servicesData.map(servicesData => <ServiceDetails service={servicesData}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;