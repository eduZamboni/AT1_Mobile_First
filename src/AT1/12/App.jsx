import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoActions from './components/VideoActions';
import VideoDescription from './components/VideoDescription';
import Advertisement from './components/Advertisement';
import RelatedVideos from './components/RelatedVideos';
import Comments from './components/Comments';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <VideoPlayer />
        <VideoActions />
        <VideoDescription />
        <Advertisement />
        <RelatedVideos />
        <Comments />
      </main>
    </div>
  );
}