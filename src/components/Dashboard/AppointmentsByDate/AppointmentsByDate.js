import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({date,appointments}) => {
    console.log(date,appointments);
    return (
        <div className="shadow mt-5 p-3">
            <h1>Appointments total: {appointments.length}</h1>
            {/* {
            appointments.map((appoint)=> <li key={appoint._id}>{appoint.name} {appoint.email}</li>) 
            } */}

            <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-brand text-left">Appointments</h2>
            <h6 className="text-secondary text-right">{date.toDateString()}</h6>
            </div>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }

        </div>
    );
};

export default AppointmentsByDate;