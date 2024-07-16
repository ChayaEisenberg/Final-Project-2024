

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drives from './drives/drives';
import { Button } from 'react-bootstrap';
import { FaCar } from 'react-icons/fa';
import '../App.css';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNewDriveClick = () => {
    navigate('/newDrive');
  };

  const handleRemoveDriveClick = () => {
    navigate('/removeDrive');
  };

  return (
    <div className="home-page">

      <Button variant="primary" className="publish-button" onClick={handleNewDriveClick}>
        <FaCar />  publish your trip
      </Button>
      <br></br>
      <br></br>
      <Button variant="primary" className="publish-button" onClick={handleRemoveDriveClick}>
        <FaCar />  delete trip
      </Button>
      <br></br>
      <br></br>
      <input
        type="text"
        className="search-input"
        placeholder="What are you looking for?"
      />
      <Drives />
    </div>
  );
}
