
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// export default function SignUp() {
//     const [form, setForm] = useState({
//         userName: '',
//         password: '',
//         firstName: '',
//         lastName: '',
//         adressId: 2,
//         email: '',
//         phoneNumber: '',
//         aboutMe: '',
//         points: '0',
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setForm({
//             ...form,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newUser = {
//             userName: form.userName,
//             password: form.password,
//             firstName: form.firstName,
//             lastName: form.lastName,
//             carOwner: form.carOwner,
//             carOwnerNavigation: null,
//             destinationPointNavigation: null,
//             startingPointNavigation: null,
//         };

//         try {
//             const response = await axios.post('http://localhost:5055/api/users', newUser);
//             console.log('Form data submitted:', response.data);
//         } catch (error) {
//             console.error('There was an error submitting the form!', error);
//         }
//     };

//     return (
//         <div className="form-container">
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="startingPoint">Starting Point:</label>
//                     <input type="text" className="form-control" id="startingPoint" name="startingPoint" value={form.startingPoint} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="destinationPoint">Destination Point:</label>
//                     <input type="text" className="form-control" id="destinationPoint" name="destinationPoint" value={form.destinationPoint} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="numberOfPassengers">Number of Passengers:</label>
//                     <input type="number" className="form-control" id="numberOfPassengers" name="numberOfPassengers" value={form.numberOfPassengers} onChange=
//                     {handleChange} />
//                     </div>
//                     <div className="form-group form-check">
//                         <input type="checkbox" className="form-check-input" id="oneTimePermanent" name="oneTimePermanent" checked={form.oneTimePermanent} onChange={handleChange} />
//                         <label className="form-check-label" htmlFor="oneTimePermanent">One Time Permanent</label>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="carOwner">Car Owner:</label>
//                         <input type="text" className="form-control" id="carOwner" name="carOwner" value={form.carOwner} onChange={handleChange} />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         );
//     }


export default function Signup() {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/');
    };

    const [form, setForm] = useState({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        carOwner: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            userName: form.userName,
            password: form.password,
            firstName: form.firstName,
            lastName: form.lastName,
            carOwner: form.carOwner,
            carOwnerNavigation: null,
            destinationPointNavigation: null,
            startingPointNavigation: null,
        };

        try {
            const response = await axios.post('http://localhost:5055/api/users', newUser);
            console.log('Form data submitted:', response.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
        navigateToHomePage();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="new-user-form">
                <h4 className="form-title">New User</h4>
                <div className="form-sections">
                    <div className="form-section">
                        <h5>User Details</h5>
                        <div className="form-group">
                            <label htmlFor="userName">Username:</label>
                            <input type="text" className="form-control" id="userName" name="userName" value={form.userName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="carOwner">Car Owner:</label>
                            <input type="text" className="form-control" id="carOwner" name="carOwner" value={form.carOwner} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn-primary">Submit</button>
            </form>
        </div>
    );
}