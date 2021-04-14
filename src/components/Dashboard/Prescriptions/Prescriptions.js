import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './Prescriptions.css'
import PrescriptionList from '../PrescriptionList/PrescriptionList';

const Prescriptions = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        fetch('https://rocky-forest-80852.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setPrescriptions(data))
    }, [])

    // console.log(prescriptions);
    // console.log(prescriptions[0]?.date.toDateString);

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 ms-5 p-4 pe-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Prescriptions</h5>
                <PrescriptionList prescriptions={prescriptions} />
            </div>
        </div>
    );
};

export default Prescriptions;