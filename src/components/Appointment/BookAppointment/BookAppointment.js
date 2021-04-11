import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointment.css'


const availableBookAppointmentData= [
    {
        _id:'1fjd3sf5ji4yuu48574895',
        id:1,
        subject:'Teeth Orthodontics',
        visitingHour:'8.00 AM - 9.00 AM',
        totalSpace: 10
    },
    {
        _id:'1fjd3sf5ji4yuu48574895',
        id:2,
        subject:'Cosmetic Dentistry',
        visitingHour:'8.00 AM - 9.00 AM',
        totalSpace: 10
    },
    {
        _id:'1fje6a45ji4yru48ge35tg',
        id:3,
        subject:'Teeth Cleaning',
        visitingHour:'8.00 AM - 9.00 AM',
        totalSpace: 10
    },
    {
        _id:'1fjd3sf5ji4y6is4b74it0',
        id:4,
        subject:'Cavity Protection',
        visitingHour:'8.00 AM - 9.00 AM',
        totalSpace: 10
    },
    {
        _id:'11er4sf5j6qr4s68574895',
        id:5,
        subject:'Teeth Orthodontics',
        visitingHour:'8.00 AM - 9.00 AM',
        totalSpace: 10
    },
    {
        _id:'1fjd3sf5ji4y2r6tu7i8y8',
        id:6,
        subject:'Teeth Orthodontics',
        visitingHour:'8.00 AM - 9.00 AM',
        totalSpace: 10
    },
];
const BookAppointment = ({date}) => {
    console.log(date);
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointment on {date.toDateString()}</h2>
            <div className="row">
                {
                    availableBookAppointmentData.map(bookingData => <BookingCard key={bookingData.id} date={date} bookings={bookingData}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;