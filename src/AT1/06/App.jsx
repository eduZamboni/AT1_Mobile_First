import Lista from './components/Lista';

function App() {
  const items = [
    { name: 'Maçã', precoUnit: 2.5, quant: 4 },
    { name: 'Pão', precoUnit: 1.2, quant: 6 },
    { name: 'Leite', precoUnit: 3.0, quant: 2 },
  ];

  return (
    <div>
      <Lista items={items} />
    </div>
  );
}

export default App;