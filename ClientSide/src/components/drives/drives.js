
import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { FaUser, FaPhoneAlt, FaLocationArrow, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';

export default function Drives() {
  const [drives, setDrives] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDrive, setSelectedDrive] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5055/api/drives')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDrives(data);
      });
  }, []);

  const handleShowModal = (drive) => {
    setSelectedDrive(drive);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDrive(null);
  };

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {drives.map((drive) => (
        <Card key={drive.id} className="card-custom" style={{ width: '23rem', height: '12rem', backgroundColor: '#D9FFCC'}}>
          <Card.Body>
            <div className="person-icon">
              <FaUser size={24} />
            </div>
            <Button variant="primary" className="contact-button" onClick={() => handleShowModal(drive)}>
              <FaPhoneAlt /> contact
            </Button>
            <br></br>
            <br></br>
            <Card.Text className="driver-info">
              <span>{drive.carOwnerNavigation.firstName} {drive.carOwnerNavigation.lastName}</span>
              <span><FaUserFriends /> {drive.numberOfPassengers} passengers</span>
            </Card.Text>

            <div className="location-icons">
              <div>
                <FaMapMarkerAlt /> from {drive.startingPointNavigation.city}
              </div>
              <div>
                <FaLocationArrow /> to {drive.destinationPointNavigation.city}
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Drive Details</Modal.Title>
        </Modal.Header>
        {selectedDrive && (
          <Modal.Body>
            <p><strong>From:</strong> {selectedDrive.startingPointNavigation.street}, {selectedDrive.startingPointNavigation.city}</p>
            <p><strong>To:</strong> {selectedDrive.destinationPointNavigation.street}, {selectedDrive.destinationPointNavigation.city}</p>
            <p><strong>Car Owner:</strong> {selectedDrive.carOwnerNavigation.firstName} {selectedDrive.carOwnerNavigation.lastName}</p>
            <p><strong>Passengers:</strong> {selectedDrive.numberOfPassengers}</p>
            {/* Add more details as needed */}
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

