

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
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group" >
            <path id="Vector" d="M15.764 4C16.321 4.00002 16.8671 4.15513 17.341 4.44797C17.8148 4.7408 18.1978 5.15979 18.447 5.658L19.83 8.423C20.074 8.323 20.317 8.222 20.553 8.105C20.7904 7.98645 21.0651 7.96705 21.3168 8.05106C21.5685 8.13508 21.7764 8.31563 21.895 8.553C22.0135 8.79037 22.0329 9.06511 21.9489 9.31678C21.8649 9.56846 21.6844 9.77645 21.447 9.895C20.953 10.141 20.727 10.217 20.727 10.217L21.683 12.13C21.892 12.547 22 13.006 22 13.472V16C22 16.4221 21.9109 16.8394 21.7386 17.2247C21.5663 17.61 21.3146 17.9546 21 18.236V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21C19.1022 21 18.7206 20.842 18.4393 20.5607C18.158 20.2794 18 19.8978 18 19.5V19H6V19.5C6 19.8978 5.84196 20.2794 5.56066 20.5607C5.27935 20.842 4.89782 21 4.5 21C4.10217 21 3.72064 20.842 3.43934 20.5607C3.15803 20.2794 3 19.8978 3 19.5V18.236C2.386 17.686 2 16.888 2 16V13.472C2.00018 13.0065 2.10871 12.5473 2.317 12.131L3.273 10.217C3.0307 10.1167 2.79128 10.0097 2.555 9.896C2.43713 9.83752 2.33195 9.75635 2.24551 9.65715C2.15907 9.55795 2.09305 9.44266 2.05125 9.3179C2.00944 9.19314 1.99267 9.06135 2.0019 8.93009C2.01112 8.79884 2.04616 8.67069 2.105 8.553C2.22597 8.31668 2.43513 8.13749 2.68722 8.05421C2.93931 7.97093 3.21405 7.99025 3.452 8.108C3.688 8.22133 3.92733 8.32633 4.17 8.423L5.553 5.658C5.80218 5.15979 6.18516 4.7408 6.65903 4.44797C7.1329 4.15513 7.67895 4.00002 8.236 4H15.764ZM18.834 10.904C17.134 11.441 14.715 12 12 12C9.285 12 6.866 11.44 5.166 10.904L4.106 13.024C4.0363 13.1631 4.00001 13.3165 4 13.472V16C4 16.2652 4.10535 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H19C19.2652 17 19.5196 16.8946 19.7071 16.7071C19.8946 16.5196 20 16.2652 20 16V13.472C19.9998 13.3168 19.9635 13.1638 19.894 13.025L18.834 10.904ZM7.5 13C7.89782 13 8.27935 13.158 8.56066 13.4393C8.84196 13.7206 9 14.1022 9 14.5C9 14.8978 8.84196 15.2794 8.56066 15.5607C8.27935 15.842 7.89782 16 7.5 16C7.10217 16 6.72064 15.842 6.43934 15.5607C6.15803 15.2794 6 14.8978 6 14.5C6 14.1022 6.15803 13.7206 6.43934 13.4393C6.72064 13.158 7.10217 13 7.5 13ZM16.5 13C16.8978 13 17.2794 13.158 17.5607 13.4393C17.842 13.7206 18 14.1022 18 14.5C18 14.8978 17.842 15.2794 17.5607 15.5607C17.2794 15.842 16.8978 16 16.5 16C16.1022 16 15.7206 15.842 15.4393 15.5607C15.158 15.2794 15 14.8978 15 14.5C15 14.1022 15.158 13.7206 15.4393 13.4393C15.7206 13.158 16.1022 13 16.5 13ZM15.764 6H8.236C8.05033 6.0001 7.86837 6.05188 7.71047 6.14955C7.55258 6.24722 7.42499 6.38692 7.342 6.553L6.072 9.09C7.62 9.555 9.706 10 12 10C14.294 10 16.38 9.555 17.927 9.09L16.658 6.553C16.575 6.38692 16.4474 6.24722 16.2895 6.14955C16.1316 6.05188 15.9497 6.0001 15.764 6Z" fill="#D9FFCC" />
          </g>
        </svg>
        publish your trip
      </Button>
      <br></br>
      <br></br>
      <input
        type="text"
        className="search-input"
        placeholder="What are you looking for?"
      />
      <Drives />
      <Button variant="primary" className="publish-button" onClick={handleRemoveDriveClick}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group" >
            <path id="Vector" d="M15.764 4C16.321 4.00002 16.8671 4.15513 17.341 4.44797C17.8148 4.7408 18.1978 5.15979 18.447 5.658L19.83 8.423C20.074 8.323 20.317 8.222 20.553 8.105C20.7904 7.98645 21.0651 7.96705 21.3168 8.05106C21.5685 8.13508 21.7764 8.31563 21.895 8.553C22.0135 8.79037 22.0329 9.06511 21.9489 9.31678C21.8649 9.56846 21.6844 9.77645 21.447 9.895C20.953 10.141 20.727 10.217 20.727 10.217L21.683 12.13C21.892 12.547 22 13.006 22 13.472V16C22 16.4221 21.9109 16.8394 21.7386 17.2247C21.5663 17.61 21.3146 17.9546 21 18.236V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21C19.1022 21 18.7206 20.842 18.4393 20.5607C18.158 20.2794 18 19.8978 18 19.5V19H6V19.5C6 19.8978 5.84196 20.2794 5.56066 20.5607C5.27935 20.842 4.89782 21 4.5 21C4.10217 21 3.72064 20.842 3.43934 20.5607C3.15803 20.2794 3 19.8978 3 19.5V18.236C2.386 17.686 2 16.888 2 16V13.472C2.00018 13.0065 2.10871 12.5473 2.317 12.131L3.273 10.217C3.0307 10.1167 2.79128 10.0097 2.555 9.896C2.43713 9.83752 2.33195 9.75635 2.24551 9.65715C2.15907 9.55795 2.09305 9.44266 2.05125 9.3179C2.00944 9.19314 1.99267 9.06135 2.0019 8.93009C2.01112 8.79884 2.04616 8.67069 2.105 8.553C2.22597 8.31668 2.43513 8.13749 2.68722 8.05421C2.93931 7.97093 3.21405 7.99025 3.452 8.108C3.688 8.22133 3.92733 8.32633 4.17 8.423L5.553 5.658C5.80218 5.15979 6.18516 4.7408 6.65903 4.44797C7.1329 4.15513 7.67895 4.00002 8.236 4H15.764ZM18.834 10.904C17.134 11.441 14.715 12 12 12C9.285 12 6.866 11.44 5.166 10.904L4.106 13.024C4.0363 13.1631 4.00001 13.3165 4 13.472V16C4 16.2652 4.10535 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H19C19.2652 17 19.5196 16.8946 19.7071 16.7071C19.8946 16.5196 20 16.2652 20 16V13.472C19.9998 13.3168 19.9635 13.1638 19.894 13.025L18.834 10.904ZM7.5 13C7.89782 13 8.27935 13.158 8.56066 13.4393C8.84196 13.7206 9 14.1022 9 14.5C9 14.8978 8.84196 15.2794 8.56066 15.5607C8.27935 15.842 7.89782 16 7.5 16C7.10217 16 6.72064 15.842 6.43934 15.5607C6.15803 15.2794 6 14.8978 6 14.5C6 14.1022 6.15803 13.7206 6.43934 13.4393C6.72064 13.158 7.10217 13 7.5 13ZM16.5 13C16.8978 13 17.2794 13.158 17.5607 13.4393C17.842 13.7206 18 14.1022 18 14.5C18 14.8978 17.842 15.2794 17.5607 15.5607C17.2794 15.842 16.8978 16 16.5 16C16.1022 16 15.7206 15.842 15.4393 15.5607C15.158 15.2794 15 14.8978 15 14.5C15 14.1022 15.158 13.7206 15.4393 13.4393C15.7206 13.158 16.1022 13 16.5 13ZM15.764 6H8.236C8.05033 6.0001 7.86837 6.05188 7.71047 6.14955C7.55258 6.24722 7.42499 6.38692 7.342 6.553L6.072 9.09C7.62 9.555 9.706 10 12 10C14.294 10 16.38 9.555 17.927 9.09L16.658 6.553C16.575 6.38692 16.4474 6.24722 16.2895 6.14955C16.1316 6.05188 15.9497 6.0001 15.764 6Z" fill="#D9FFCC" />
          </g>
        </svg>
         delete trip
      </Button>
      <br></br>
      <br></br>
    </div>
  );
}






