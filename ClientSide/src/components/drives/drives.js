
import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { FaUser, FaPhone, FaLocationArrow, FaMapMarkerAlt, FaUserFriends, FaPhoneSlash, FaPhoneAlt } from 'react-icons/fa';

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
    <div className="d-flex flex-wrap justify-content-around" style={{paddingRight: '4rem',paddingLeft:'4rem'}}>
      {drives.map((drive) => (
        <Card key={drive.id} className="card-custom" style={{ width: '23rem', height: '12rem', backgroundColor: '#D9FFCC' }}>
          <Card.Body>
            <div className="person-icon">
              <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M34.773 31.5827C32.2148 27.1601 28.2726 23.9888 23.6719 22.4855C25.9476 21.1308 27.7157 19.0665 28.7046 16.6096C29.6935 14.1528 29.8486 11.4392 29.1461 8.88568C28.4436 6.33214 26.9222 4.07982 24.8157 2.47459C22.7092 0.869367 20.134 0 17.4856 0C14.8372 0 12.262 0.869367 10.1555 2.47459C8.04899 4.07982 6.52766 6.33214 5.82512 8.88568C5.12258 11.4392 5.27769 14.1528 6.26662 16.6096C7.25555 19.0665 9.02362 21.1308 11.2993 22.4855C6.69866 23.9872 2.75643 27.1584 0.198264 31.5827C0.104452 31.7357 0.0422267 31.9059 0.0152603 32.0833C-0.0117062 32.2607 -0.00286768 32.4417 0.0412542 32.6156C0.0853761 32.7896 0.163888 32.9529 0.272157 33.096C0.380426 33.2391 0.516259 33.359 0.671642 33.4488C0.827025 33.5386 0.998811 33.5963 1.17686 33.6186C1.35492 33.6408 1.53563 33.6272 1.70834 33.5786C1.88105 33.5299 2.04226 33.4471 2.18246 33.3351C2.32266 33.2231 2.439 33.0841 2.52463 32.9264C5.68916 27.4574 11.2825 24.1921 17.4856 24.1921C23.6887 24.1921 29.2821 27.4574 32.4466 32.9264C32.5322 33.0841 32.6486 33.2231 32.7888 33.3351C32.929 33.4471 33.0902 33.5299 33.2629 33.5786C33.4356 33.6272 33.6163 33.6408 33.7944 33.6186C33.9724 33.5963 34.1442 33.5386 34.2996 33.4488C34.455 33.359 34.5908 33.2391 34.6991 33.096C34.8073 32.9529 34.8858 32.7896 34.93 32.6156C34.9741 32.4417 34.9829 32.2607 34.956 32.0833C34.929 31.9059 34.8668 31.7357 34.773 31.5827ZM8.07936 12.0983C8.07936 10.2379 8.63103 8.41934 9.6646 6.87249C10.6982 5.32564 12.1672 4.12001 13.886 3.40808C15.6048 2.69614 17.496 2.50987 19.3207 2.87281C21.1453 3.23575 22.8213 4.13161 24.1368 5.4471C25.4523 6.76258 26.3482 8.43862 26.7111 10.2633C27.0741 12.0879 26.8878 13.9792 26.1759 15.6979C25.4639 17.4167 24.2583 18.8858 22.7114 19.9193C21.1646 20.9529 19.346 21.5046 17.4856 21.5046C14.9917 21.5019 12.6008 20.51 10.8373 18.7466C9.0739 16.9832 8.08203 14.5922 8.07936 12.0983Z" fill="#8518FF" />
              </svg>
            </div>
            <Button variant="primary" className="contact-button" onClick={() => handleShowModal(drive)}>
              <FaPhoneAlt />contact
            </Button>
            <br></br>
            <br></br>
            <Card.Text className="driver-info">
              <span>{drive.carOwnerNavigation.firstName} {drive.carOwnerNavigation.lastName}</span>
              <span>
                <svg width="24" height="32" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M4.19726 3.26069C3.76169 3.26069 3.38896 3.10119 3.07905 2.78219C2.76913 2.46318 2.61392 2.07924 2.61339 1.63035C2.61286 1.18146 2.76808 0.797787 3.07905 0.479327C3.39001 0.160866 3.76275 0.0010924 4.19726 5.50792e-06C4.63177 -0.00108139 5.00477 0.158692 5.31626 0.479327C5.62776 0.799961 5.78271 1.18364 5.78113 1.63035C5.77955 2.07706 5.62459 2.46101 5.31626 2.78219C5.00794 3.10337 4.63493 3.26287 4.19726 3.26069ZM7.76097 14.6731H3.44492C3.00936 14.6731 2.61022 14.5136 2.24751 14.1946C1.88481 13.8756 1.65699 13.4917 1.56407 13.0428L0.0197984 5.05407C-0.0329973 4.79594 0.0197984 4.5685 0.178186 4.37177C0.336573 4.17505 0.547755 4.07641 0.811734 4.07587C0.996519 4.07587 1.16151 4.137 1.30669 4.25928C1.45188 4.38156 1.54427 4.5378 1.58387 4.728L3.20734 13.0428H7.76097C7.98535 13.0428 8.17357 13.121 8.32562 13.2775C8.47767 13.434 8.55343 13.6275 8.5529 13.8579C8.55238 14.0884 8.47635 14.2821 8.32483 14.4392C8.1733 14.5962 7.98535 14.6742 7.76097 14.6731ZM12.5126 15.5902L10.6119 12.2276H5.10798C4.72522 12.2276 4.39181 12.1088 4.10777 11.8714C3.82373 11.6339 3.64238 11.3179 3.56371 10.9233L2.69258 6.56214C2.54739 5.91001 2.69601 5.33259 3.13844 4.8299C3.58087 4.32721 4.11859 4.07587 4.75161 4.07587C5.21358 4.07587 5.63277 4.21852 6.00921 4.50383C6.38564 4.78914 6.62639 5.17635 6.73145 5.66545L7.60258 9.78207H10.1764C10.4535 9.78207 10.7109 9.8568 10.9485 10.0062C11.1861 10.1557 11.3775 10.3527 11.5227 10.5972L13.8985 14.775C14.0041 14.9652 14.0273 15.1725 13.9682 15.397C13.909 15.6214 13.7868 15.7877 13.6015 15.8959C13.4162 16.004 13.2148 16.0279 12.9972 15.9676C12.7797 15.9073 12.6182 15.7815 12.5126 15.5902Z" fill="#8518FF" />
                </svg>

                {drive.numberOfPassengers} passengers
              </span>
            </Card.Text>

            <div className="location-icons">
              <div>
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 16.968 20.2133 22.1733 12.8 27.7333C12.5692 27.9064 12.2885 28 12 28C11.7115 28 11.4308 27.9064 11.2 27.7333C3.78667 22.1733 0 16.968 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0ZM12 2.66667C9.52465 2.66667 7.15068 3.65 5.40034 5.40034C3.65 7.15068 2.66667 9.52465 2.66667 12C2.66667 15.6133 5.49067 19.7813 11.264 24.408L12 24.9893L12.736 24.408C18.5093 19.7813 21.3333 15.6133 21.3333 12C21.3333 9.52465 20.35 7.15068 18.5997 5.40034C16.8493 3.65 14.4754 2.66667 12 2.66667ZM12 9.33333C12.7072 9.33333 13.3855 9.61429 13.8856 10.1144C14.3857 10.6145 14.6667 11.2928 14.6667 12C14.6667 12.7072 14.3857 13.3855 13.8856 13.8856C13.3855 14.3857 12.7072 14.6667 12 14.6667C11.2928 14.6667 10.6145 14.3857 10.1144 13.8856C9.61429 13.3855 9.33333 12.7072 9.33333 12C9.33333 11.2928 9.61429 10.6145 10.1144 10.1144C10.6145 9.61429 11.2928 9.33333 12 9.33333Z" fill="#8518FF" />
                </svg>

                from {drive.startingPointNavigation.city}
              </div>
              <div>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M3.52715 9.71263L19.1572 2.27085C21.436 1.18514 23.8141 3.56431 22.7296 5.8443L15.2872 21.4718C14.2698 23.607 11.1867 23.4756 10.3556 21.26L8.98024 17.5887C8.84586 17.2305 8.63637 16.9053 8.36586 16.6348C8.09534 16.3643 7.77006 16.1548 7.41188 16.0205L3.73895 14.6439C1.52447 13.8129 1.39176 10.73 3.52715 9.71263Z" stroke="#8518FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                to {drive.destinationPointNavigation.city}
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

