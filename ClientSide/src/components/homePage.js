import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drives from './drives/drives';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNewDriveClick = () => {
    navigate('/newdrive');
  };

  return (
    <div>
      <h1>HomePage</h1>
      <br />
      <Drives />
      <button onClick={handleNewDriveClick}>Create New Drive</button>
    </div>
  );
}