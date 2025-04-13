// my-app/src/ImageFromSrc.js
import React from 'react';
import yourImage from './mojave_wallpaper.jpg'; 

const ImageFromSrc = () => {
    return (
        <div>
            <h2>Image from Src Folder</h2>
            <img src={yourImage} alt="Src" style={{ width: '150px', height: '150px' }} />
        </div>
    );
};

export default ImageFromSrc;