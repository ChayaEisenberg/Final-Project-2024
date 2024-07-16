import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default function RemoveDrive() {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/');
      };

    const [form, setForm] = useState({
        userName: '',
        password: '',
        driveId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const deleteDrive = async (driveId) => {      
        
        try {
            const response = await axios.delete(`http://localhost:5055/api/drives/${driveId}`);
            console.log('Drive deleted:', response.data);
            return response.data;
        } catch (error) {
            console.error('There was an error deleting the drive!', error);
            return null;
        }
    };
    const successMessage = async()=> {
        await deleteDrive(form.driveId);
        alert("Drive deleted successfully");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();         
         await successMessage()
         navigateToHomePage();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">User Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="userName"
                        value={form.userName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="driveId">Drive Code:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="driveId"
                        name="driveId"
                        value={form.driveId}
                        placeholder='you got this code when you created your drive'
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-danger">Delete Drive</button>
            </form>
        </div>
    );
}
