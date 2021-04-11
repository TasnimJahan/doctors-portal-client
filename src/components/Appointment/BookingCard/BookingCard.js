import React from 'react';

const BookingCard = ({bookings}) => {
    console.log(bookings);
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{bookings.subject}</h5>
                    <h6>{bookings.visitingHour}</h6>
                    <p>{bookings.totalSpace} SPACES AVAILABLE</p>
                    <button className="btn btn-brand text-uppercase">book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;