import Header from './Components/Header';
import Menu from './Components/Menu';
import Post from './Components/Post';
import Friend from './Components/Friend';
import './styles.css';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="main-grid">
        <div className="feed">
          <Post
            image="https://via.placeholder.com/600x400"
            title="Título da Postagem"
            text="Texto da postagem..."
            date="12 de Setembro de 2024"
            author="Amigo 1"
            likes={120}
            shares={30}
            comments={[
              { author: 'Usuário 1', text: 'Comentário 1' },
              { author: 'Usuário 2', text: 'Comentário 2' },
            ]}
          />
        </div>
        <aside className="sidebar">
          <div className="friends-list">
            <h3>Amigos</h3>
            <Friend
              image="https://via.placeholder.com/50"
              name="Amigo 2"
              mutualFriends={10}
            />
            <Friend
              image="https://via.placeholder.com/50"
              name="Amigo 3"
              mutualFriends={5}
            />
          </div>
          <div className="suggestions-list">
            <h3>Sugestões de Amizade</h3>
            <Friend
              image="https://via.placeholder.com/50"
              name="Sugestão 1"
              mutualFriend="Amigo em Comum"
            />
            <Friend
              image="https://via.placeholder.com/50"
              name="Sugestão 2"
              mutualFriend="Amigo em Comum"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
