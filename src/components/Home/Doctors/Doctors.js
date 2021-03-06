import React, { useEffect, useState } from 'react';
import DoctorsDetail from '../DoctorsDetail/DoctorsDetail';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://rocky-forest-80852.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor =><DoctorsDetail key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;