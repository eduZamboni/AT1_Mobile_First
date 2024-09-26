export default function VideoPlayer() {
  return (
    <section className="video-player">
      <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/77DvDgjNH_8?si=bY0Jv4qGdjw4xLMV" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      ></iframe>
      <h1 className="video-title">COMO é FEITA a PAÇOQUITA #Boravê</h1>
      <p className="video-author">Manual do Mundo</p>
    </section>
  );
}