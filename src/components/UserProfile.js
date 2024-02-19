import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector(state => state.user.user);

  if (!user) {
    return <div>No user data available</div>; 
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-4">
        <label className="block mb-2">Username:</label>
        <p>{user.username || 'N/A'}</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <p>{user.email || 'N/A'}</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Profile Picture:</label>
        <img src={user.profilePicture || 'placeholder.png'} alt="Profile" className="w-20 h-20 rounded-full" />
      </div>
    </div>
  );
};

export default UserProfile;
