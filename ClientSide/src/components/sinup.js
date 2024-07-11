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
        const newUser = {
            userName: form.userName,
            password: form.password,
            firstName: form.firstName,
            lastName: form.lastName,
            adressId: form.adressId,
            email: form.email,
            phoneNumber: form.phoneNumber,
            aboutMe: form.aboutMe,
            points: form.points,
        };

        try {
            const response = await axios.post('http://localhost:5055/api/users', newUser);
            console.log('Form data submitted:', response.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">User Name:</label>
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
                    <label htmlFor="adressId">Address ID:</label>
                    <input type="number" className="form-control" id="adressId" name="adressId" value={form.adressId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="aboutMe">About Me:</label>
                    <textarea className="form-control" id="aboutMe" name="aboutMe" value={form.aboutMe} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="points">Points:</label>
                    <input type="number" className="form-control" id="points" name="points" value={form.points} onChange={handleChange} readOnly />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
