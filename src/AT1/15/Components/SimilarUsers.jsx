import { users } from './data'; // Importação corrigida
import UserCard from './UserCard';

export default function SimilarUsers({ userPreferences, onViewChange }) {
  // Calcula os níveis de afinidade
  const calculateAffinity = () => {
    if (Object.keys(userPreferences).length === 0) {
      return [];
    }

    return users
      .map((user) => {
        let affinity = 0;
        Object.keys(userPreferences).forEach((itemId) => {
          if (user.preferences[itemId] === userPreferences[itemId]) {
            affinity += 1;
          }
        });
        return { ...user, affinity };
      })
      .filter((user) => user.affinity > 0)
      .sort((a, b) => b.affinity - a.affinity);
  };

  const similarUsers = calculateAffinity();

  const handleBack = () => {
    onViewChange('items');
  };

  return (
    <div className="similar-users">
      <button onClick={handleBack} className="back-button">&larr; Voltar</button>
      <h2>Usuários Similares</h2>
      {similarUsers.length > 0 ? (
        similarUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      ) : (
        <p>
          Nenhum usuário similar encontrado. Avalie alguns itens para ver usuários com
          preferências semelhantes.
        </p>
      )}
    </div>
  );
}