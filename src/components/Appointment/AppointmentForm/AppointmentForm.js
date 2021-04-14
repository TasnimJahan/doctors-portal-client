import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppoinmentForm.css'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date=date;
        data.createdDate = new Date();
        //post hole ekhane fetch e method bole dite hy
        fetch('https://rocky-forest-80852.herokuapp.com/addAppointment',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully');
            }
        })

        // console.log(data);
        // closeModal();
    };

//   console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
        <h2 className="text-brand text-center mb-5">{appointmentOn}</h2>
        <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
        {/* <button className="btn btn-brand w-25 text-white mb-3" onClick={closeModal}>close</button> */}
        <form onSubmit={handleSubmit(onSubmit)}>
                    
            <div className="form-group mb-3">
                <input className="form-control p-3" type="text" placeholder="Your Name" {...register("name", { required: true })} />
                {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group mb-3">
            <input className="form-control p-3" type="text" placeholder="Phone Number" {...register("phone", { required: true })} /> 
                {errors.phone && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group mb-3">
                <input className="form-control p-3"  type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group mb-3 row">
                <div className="col-4">
                    <select className="form-control p-3" name="gender" {...register("gender", { required: true })} >
                        <option disabled={true} value="Not set">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Not set">Other</option>
                    </select>
                    {errors.gender && <span className="text-danger">This field is required</span>}
                </div>
                <div className="col-4">
                    <input {...register("age", { required: true })} className="form-control p-3" name="age" placeholder="Your Age" type="number" />
                    {errors.age && <span className="text-danger">This field is required</span>}
                </div>
                <div className="col-4">
                    <input {...register("weight", { required: true })} className="form-control p-3" name="weight" placeholder="Weight" type="number" />
                    {errors.weight && <span className="text-danger">This field is required</span>}
                </div>
            </div>     
            <div className="form-group mb-3 text-right d-flex justify-content-end">
                <button style={{height:'3rem'}} type="submit" className="btn btn-brand w-25 text-white">Send</button>
            </div>
        </form>

        </Modal>
      </div>
    );
};

export default AppointmentForm;