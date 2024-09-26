import Comment from './Comment';

export default function Comments() {
  const comments = [
    {
      author: 'User 1',
      date: '12/08/2024',
      text: 'Ótimo Produto!',
    },
    {
      author: 'User 2',
      date: '11/08/2024',
      text: 'Recomendo Muito!',
    },
  ];

  return (
    <section className="comments-section">
      <h2 className="section-title">Feedback do Consumidor</h2>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          date={comment.date}
          text={comment.text}
        />
      ))}
    </section>
  );
}