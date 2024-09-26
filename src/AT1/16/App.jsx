import { useState } from 'react';
import AttractionList from './Components/AttractionList';
import AttractionDetails from './Components/AttractionDetails';
import VisitList from './Components/VisitList';
import './styles.css';

export default function App() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [visitList, setVisitList] = useState([]);

  const handleSelectAttraction = (attraction) => {
    setSelectedAttraction(attraction);
  };

  const handleAddToVisitList = (attraction, peopleCount) => {
    const existingItem = visitList.find(
      (item) => item.attraction.id === attraction.id
    );
    if (existingItem) {
      // Atualiza a quantidade de pessoas
      const updatedVisitList = visitList.map((item) =>
        item.attraction.id === attraction.id
          ? { ...item, peopleCount }
          : item
      );
      setVisitList(updatedVisitList);
    } else {
      setVisitList([
        ...visitList,
        { attraction, peopleCount },
      ]);
    }
  };

  const handleRemoveFromVisitList = (attractionId) => {
    setVisitList(visitList.filter((item) => item.attraction.id !== attractionId));
  };

  return (
    <div className="app-container">
      <h1>Pontos Turísticos de São Paulo</h1>
      <div className="main-content">
        <AttractionList onSelectAttraction={handleSelectAttraction} />
        {selectedAttraction && (
          <AttractionDetails
            attraction={selectedAttraction}
            onAddToVisitList={handleAddToVisitList}
          />
        )}
        <VisitList
          visitList={visitList}
          onRemoveFromVisitList={handleRemoveFromVisitList}
        />
      </div>
    </div>
  );
}