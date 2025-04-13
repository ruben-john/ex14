// ProfileImage.js
import React from 'react';

const ProfileImage = ({ imageUrl }) => {
    return <img src={imageUrl} alt="Profile" style={{ width: '150px', height: '150px' }} />;
};

export default ProfileImage;