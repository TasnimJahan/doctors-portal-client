import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        <FontAwesomeIcon className="icons" icon={faGripHorizontal} /> <span style={{marginLeft:'17%'}}>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white">
                        <FontAwesomeIcon className="icons" icon={faCalendar} /> <span style={{marginLeft:'17%'}}>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                        <FontAwesomeIcon className="icons" icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon className="icons" icon={faFileAlt} /> <span style={{marginLeft:'6%'}}>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon className="icons" icon={faUserPlus} /> <span style={{marginLeft:'0%'}}>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      <FontAwesomeIcon className="icons" icon={faCog} /> <span style={{marginLeft:'4%'}}>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon className="icons" icon={faSignOutAlt} /> <span style={{marginLeft:'2%', textDecoration: 'none'}}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;