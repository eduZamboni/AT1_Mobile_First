export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <p className="user-name">Usuário: {user.name}</p>
      <p className="user-affinity">Afinidade: {user.affinity}</p>
    </div>
  );
}