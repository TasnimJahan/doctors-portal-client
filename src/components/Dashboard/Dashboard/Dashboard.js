import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate,setSelectedDate]= useState(new Date());
    const [appointments,setAppointments] =useState([]);

    const handleDateChange = (date)=> {
        // console.log(date.toDateString());
        setSelectedDate(date);
        // fetch('http://localhost:5000/appointmentsByDate',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({date})
        // })
        // .then(response=> response.json())
        // .then(data =>{
        //     setAppointments(data);
        // })
    }

    useEffect(()=>{
        fetch('http://localhost:5000/appointmentsByDate',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date:selectedDate, email:loggedInUser.email})
        })
        .then(response=> response.json())
        .then(data =>{
            setAppointments(data);
        })
    },[selectedDate])


    return (
        <section>
            <div className="container-fluid row dashboard">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                    <h2 className="ms-5 mt-3">Appointments</h2>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5 mt-5">
                    <AppointmentsByDate date={selectedDate} appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;