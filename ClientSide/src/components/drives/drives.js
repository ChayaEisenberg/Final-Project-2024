// import React from 'react'
// import { useState, useEffect } from 'react';

// export default function Drives() {
//   const [drives, setDrives] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:5055/api/drives')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setDrives(data);
//       });
//   }, []);
//   return (
// drives.map(drive => (<div>From:{drive.startingPoint}   To:{drive.destinationPoint}  ,{drive.carOwner}, {drive.numberOfPassengers}</div>))
//   );
// };




import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Card key={drive.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Body>
            <Card.Title>From: {drive.startingPoint} To: {drive.destinationPoint}</Card.Title>
            <Card.Text>
              <strong>Passengers:</strong> {drive.numberOfPassengers}
            </Card.Text>
            <Button variant="primary" onClick={() => handleShowModal(drive)}>
              Show Details
            </Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Drive Details</Modal.Title>
        </Modal.Header>
        {selectedDrive && (
          <Modal.Body>
            <p><strong>From:</strong> {selectedDrive.startingPoint}</p>
            <p><strong>To:</strong> {selectedDrive.destinationPoint}</p>
            <p><strong>Car Owner:</strong> {selectedDrive.carOwner}</p>
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