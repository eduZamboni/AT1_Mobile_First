import { useState } from 'react';
import items from './data';

export default function ItemViewer({ userPreferences, onPreference, onViewChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    onPreference(items[currentIndex].id, 'like');
    nextItem();
  };

  const handleDislike = () => {
    onPreference(items[currentIndex].id, 'dislike');
    nextItem();
  };

  const nextItem = () => {
    if (currentIndex + 1 < items.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Todas as avaliações foram concluídas
      onViewChange('users');
    }
  };

  const handleViewSimilar = () => {
    onViewChange('users');
  };

  return (
    <div className="item-viewer">
      <h2>Você gosta deste filme?</h2>
      <p className="item-title">{items[currentIndex].title}</p>
      <div className="item-actions">
        <button onClick={handleLike}>Gosto</button>
        <button onClick={handleDislike}>Não Gosto</button>
      </div>
      <button onClick={handleViewSimilar} className="view-similar-button">
        Ver Afinidade
      </button>
    </div>
  );
}