import React from 'react';
import './DoctorsDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const DoctorsDetail = ({doctor}) => {
    return (
        <div class="col-sm-4 col-md-4">
             <div class="card" style={{width: '24rem',margin:'0 auto',border:'none'}}>
                <img class="doctorImg" src={doctor.img} alt=""/>
                <div class="card-body drAddress text-center">
                    <h5 class="card-title">{doctor.name}</h5>
                    <p class="card-text"><FontAwesomeIcon style={{color: '#5FC7C7'}} icon={faPhoneAlt} />{doctor.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetail;