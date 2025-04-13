// my-app/src/ImageFromPublic.js
import React from 'react';

const ImageFromPublic = () => {
    return (
        <div>
            <h2>Image from Public Folder</h2>
            <img src={`${process.env.PUBLIC_URL}/Images/ferrari.jpeg`} alt="Public" style={{ width: '150px', height: '150px' }} />
        </div>
    );
};

export default ImageFromPublic;