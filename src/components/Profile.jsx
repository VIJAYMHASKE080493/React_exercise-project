import React from 'react';

const Profile = ({ username = "Guest" }) => {
  return (
    <div style={{ border: '1px solid blue', padding: '1rem', margin: '1rem' }}>
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default Profile;
