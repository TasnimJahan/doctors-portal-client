import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OverAllAppointmentDashboard.css'
import OverAllAppointmentDetailsList from '../OverAllAppointmentDetailsList/OverAllAppointmentDetailsList';

const OverAllAppointmentDashboard = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        fetch('https://rocky-forest-80852.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setPrescriptions(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 ms-5 p-4 pe-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Dashboard</h5>
                <OverAllAppointmentDetailsList prescriptions={prescriptions} />
            </div>
        </div>
    );
};
export default OverAllAppointmentDashboard;