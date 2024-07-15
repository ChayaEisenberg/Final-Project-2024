
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default function NewDrive() {
    const [form, setForm] = useState({
        startingCity: '',
        startingStreet: '',
        startingBuildNumber: '',
        startingPlaceDescription: '',
        city: '',
        street: '',
        placeDescription: '',
        buildNumber: '',
        destinationPoint: '',
        numberOfPassengers: 1,
        oneTimePermanent: false,
        carOwner: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const startingPoint = {
        city: form.startingCity,
        street: form.startingStreet,
        placeDescription: form.startingPlaceDescription,
        buildNumber: form.startingBuildNumber
    };
    const destinationPoint = {
        city: form.city,
        street: form.street,
        placeDescription: form.placeDescription,
        buildNumber: form.buildNumber
    }
    const postAddress = async (address) => {
        try {
            const response = await axios.post('http://localhost:5055/api/addresses', address);
            console.log('Form data submitted:', response.data);
            return response.data;
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const startingPointId = await postAddress(startingPoint)
        const destinationPointId = await postAddress(destinationPoint)

        const newDrive = {
            startingPoint: startingPointId.addressId,
            destinationPoint: destinationPointId.addressId,
            numberOfPassengers: form.numberOfPassengers,
            oneTimePermanent: form.oneTimePermanent,
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
                <h4>startingPoint</h4>
                <div className="form-group">
                    <label htmlFor="city1">City:</label>
                    <input type="text" className="form-control" id="city" name="startingCity" value={form.startingCity} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street:</label>
                    <input type="text" className="form-control" id="street" name="startingStreet" value={form.startingStreet} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="placeDescription">Place Description:</label>
                    <input type="text" className="form-control" id="placeDescription" name="startingPlaceDescription" value={form.startingPlaceDescription} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="buildNumber">Build Number:</label>
                    <input type="text" className="form-control" id="buildNumber" name="startingBuildNumber" value={form.startingBuildNumber} onChange={handleChange} />
                </div>
                <h4>destinationPoint</h4>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" className="form-control" id="city" name="city" value={form.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street:</label>
                    <input type="text" className="form-control" id="street" name="street" value={form.street} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="placeDescription">Place Description:</label>
                    <input type="text" className="form-control" id="placeDescription" name="placeDescription" value={form.placeDescription} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="buildNumber">Build Number:</label>
                    <input type="text" className="form-control" id="buildNumber" name="buildNumber" value={form.buildNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carOwner">Car Owner:</label>
                    <input type="text" className="form-control" id="carOwner" name="carOwner" value={form.carOwner} onChange={handleChange} />
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

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}