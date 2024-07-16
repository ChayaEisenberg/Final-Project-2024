
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default function NewDrive() {

    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/');
      };

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
    };

    const postAddress = async (address) => {
        try {
            const response = await axios.post('http://localhost:5055/api/addresses', address);
            console.log('Form data submitted:', response.data);
            return response.data;
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };
    const postDrive = async(e) => {
        e.preventDefault();
        const startingPointId = await postAddress(startingPoint);
        const destinationPointId = await postAddress(destinationPoint);

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
            return response.data;
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    }
    const successMessage = async(e)=> {
        const newDrive = await postDrive(e);
        alert("Drive created successfully!" + " your drive code is: " + newDrive.travelId+ 
        " save it, if you want to delete this drive later");
    }
    
    const handleSubmit = async (e) => {
        await successMessage(e)
        
        navigateToHomePage();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="new-drive-form">
                <div className="form-sections">
                    <div className="form-section">
                        <h5 className="form-title">Starting Point</h5>
                        <div className="form-group">
                            <label htmlFor="startingCity">City:</label>
                            <input type="text" className="form-control" id="startingCity" name="startingCity" value={form.startingCity} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startingStreet">Street:</label>
                            <input type="text" className="form-control" id="startingStreet" name="startingStreet" value={form.startingStreet} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startingPlaceDescription">Place Description:</label>
                            <input type="text" className="form-control" id="startingPlaceDescription" name="startingPlaceDescription" value={form.startingPlaceDescription} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startingBuildNumber">Building Number:</label>
                            <input type="text" className="form-control" id="startingBuildNumber" name="startingBuildNumber" value={form.startingBuildNumber} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-section">
                        <h5 className="form-title">Destination Point</h5>
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
                            <label htmlFor="buildNumber">Building Number:</label>
                            <input type="text" className="form-control" id="buildNumber" name="buildNumber" value={form.buildNumber} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-section">
                        <h5 className="form-title">Additional Details</h5>
                        <div className="form-group">
                            <label htmlFor="carOwner">Car Owner:</label>
                            <input type="text" className="form-control" id="carOwner" name="carOwner" value={form.carOwner} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numberOfPassengers">Number of Passengers:</label>
                            <input type="number" className="form-control" id="numberOfPassengers" name="numberOfPassengers" value={form.numberOfPassengers} onChange={handleChange} />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" id="oneTimePermanent" name="oneTimePermanent" checked={form.oneTimePermanent} onChange={handleChange} /><label className="form-check-label" htmlFor="oneTimePermanent">One Time Permanent</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn-primary" >Submit</button>
            </form>
        </div>
    );
}
