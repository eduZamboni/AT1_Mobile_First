import React, { useState } from 'react';
import styles from './Gallery.module.css';

export default function App() {
  const [imageCount, setImageCount] = useState(5);

  // Função para adicionar uma imagem
  const addImage = () => {
    setImageCount(prevCount => prevCount + 1);
  };

  // Função para remover uma imagem
  const removeImage = () => {
    setImageCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Gerando um array de elementos para a galeria
  const images = Array.from({ length: imageCount }, (_, index) => (
    <div key={index} className={styles.imageBox}>
      <span>100 x 100</span>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button onClick={removeImage}>-</button>
        <span>{imageCount}</span>
        <button onClick={addImage}>+</button>
      </div>
      <div className={styles.gallery}>
        {images}
      </div>
    </div>
  );
}