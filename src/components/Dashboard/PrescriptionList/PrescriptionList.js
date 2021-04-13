import React from 'react';

const PrescriptionList = ({prescriptions}) => {
    // let date=toDateString();
    console.log(prescriptions);
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                {/* <th className="text-secondary" scope="col">Gender</th> */}
                <th className="text-secondary" scope="col">Date</th>
                {/* <th className="text-secondary" scope="col">Weight</th> */}
                <th className="text-secondary" scope="col">Phone</th>
                {/* <th className="text-secondary" scope="col">Email</th> */}
                <th className="text-secondary" scope="col">Prescription</th>
                </tr>
            </thead>
            <tbody>
                {
                  prescriptions.map((prescription, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{prescription.name}</td>
                        {/* <td>{prescription.gender}</td> */}
                        <td>{prescription.date}</td>
                        {/* <td>{prescription.weight}KG</td> */}
                        <td>{prescription.phone}</td>
                        {/* <td>{prescription.email}</td> */}
                        <td><button className="btn-brand w-50">View</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default PrescriptionList;