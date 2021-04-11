import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone,faClock,faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './BusinessInfo.css'

const infoData = [
    {
        title: "Opening Hours",
        description: "We are open 7 days",
        icon: faClock,
        background: "primary"
    },
    {
        title: "Visit Our Location",
        description: "Brooklyn, NY 10003,USA",
        icon: faMapMarker,
        background: "dark"
    },
    {
        title: "Call Us Now",
        description: "+123 456 789",
        icon: faPhone,
        background: "primary"
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-85">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;