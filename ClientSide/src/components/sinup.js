
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function SignUp() {
    const [form, setForm] = useState({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        adressId: 2,
        email: '',
        phoneNumber: '',
        aboutMe: '',
        points: '0',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDrive = {
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
            const response = await axios.post('http://localhost:5055/api/drives', newDrive);
            console.log('Form data submitted:', response.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="startingPoint">Starting Point:</label>
                    <input type="text" className="form-control" id="startingPoint" name="startingPoint" value={form.startingPoint} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="destinationPoint">Destination Point:</label>
                    <input type="text" className="form-control" id="destinationPoint" name="destinationPoint" value={form.destinationPoint} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfPassengers">Number of Passengers:</label>
                    <input type="number" className="form-control" id="numberOfPassengers" name="numberOfPassengers" value={form.numberOfPassengers} onChange=
                    {handleChange} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="oneTimePermanent" name="oneTimePermanent" checked={form.oneTimePermanent} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="oneTimePermanent">One Time Permanent</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="carOwner">Car Owner:</label>
                        <input type="text" className="form-control" id="carOwner" name="carOwner" value={form.carOwner} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }