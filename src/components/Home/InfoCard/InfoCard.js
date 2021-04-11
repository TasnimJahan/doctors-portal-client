import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faClock,faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center align-items-center info-container background-${info.background}`}>
                <div className="me-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;