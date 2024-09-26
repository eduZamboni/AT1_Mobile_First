import { useState } from 'react';
import ItemViewer from './Components/ItemViewer';
import SimilarUsers from './Components/SimilarUsers';
import './styles.css';

export default function App() {
  const [userPreferences, setUserPreferences] = useState({});
  const [view, setView] = useState('items'); 

  const handlePreference = (itemId, preference) => {
    setUserPreferences((prev) => ({
      ...prev,
      [itemId]: preference,
    }));
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="app-container">
      <h1>Preferências da Cultura POP!</h1>
      {view === 'items' ? (
        <ItemViewer
          userPreferences={userPreferences}
          onPreference={handlePreference}
          onViewChange={handleViewChange}
        />
      ) : (
        <SimilarUsers
          userPreferences={userPreferences}
          onViewChange={handleViewChange}
        />
      )}
    </div>
  );
}