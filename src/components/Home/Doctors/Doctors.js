import React from 'react';
import doctor from '../../../images/doctor.png'
import DoctorsDetail from '../DoctorsDetail/DoctorsDetail';

const doctorsData = [
    {
        name: "Dr Caudi",
        phone: "+12 345 678 908",
        img: doctor
    },
    {
        name: "Dr Caudi",
        phone: "+12 345 678 908",
        img: doctor
    },
    {
        name: "Dr Caudi",
        phone: "+12 345 678 908",
        img: doctor
    }
]


const Doctors = () => {
    return (
        <section className="doctors my-5 py-5">
            <div className="container">
                <div className="section-header d-flex justify-content-center">
                    <div className="text-center">
                        <h5 className="text-primary text-uppercase">our blog</h5>
                    </div>
                </div>
                <div className="card-deck mt-5 row d-flex justify-content-center">
                    {
                        doctorsData.map(doctor=> <DoctorsDetail doctor={doctor}></DoctorsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;