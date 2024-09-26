import React, { useState } from 'react';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <img src={selectedImage} alt="Product" className="main-image" />
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className="thumbnail"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
}