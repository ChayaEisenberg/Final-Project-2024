import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drives from './drives/drives';
import { Card, Button, Modal } from 'react-bootstrap';
import '../App.css';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNewDriveClick = () => {
    navigate('/newdrive');
  };

  return (
    <div>
      <br />
      {/* <button variant="primary" onClick={handleNewDriveClick} className="contact-button">Create New Drive</button> */}
      <Button variant="primary" className="contact-button" onClick={handleNewDriveClick}>contact</Button>
      <Drives />
    </div>
  );
}