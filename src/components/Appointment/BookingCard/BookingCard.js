import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({bookings,date}) => {
    // console.log(bookings);

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{bookings.subject}</h5>
                    <h6>{bookings.visitingHour}</h6>
                    <p>{bookings.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">book appointment</button>
                    <AppointmentForm closeModal={closeModal} appointmentOn={bookings.subject} modalIsOpen={modalIsOpen} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;