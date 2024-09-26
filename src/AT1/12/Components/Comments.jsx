import Comment from './Comment';

export default function Comments() {
  const comments = [
    { id: 1, name: 'Usuário 1', date: '05/07/2024', text: 'O homem que tirou o amendoim do chão, torrou, provou e viu que era bom, a você, meu amigo! Toda minha gratidão!' },
    { id: 2, name: 'Usuário 2', date: '15/07/2024', text: 'Obrigada Iberê! Nunca mais vou comer uma paçoquita da mesma forma, agora vou valorizar muito mais. Que trabalhão!!!' },
  ];

  return (
    <section className="comments">
      <h2>Comentários</h2>
      {comments.map(comment => (
        <Comment key={comment.id} name={comment.name} date={comment.date} text={comment.text} />
      ))}
    </section>
  );
}