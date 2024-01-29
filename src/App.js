import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import VideoPlayer from './components/VideoPlayer';
function App() {
  const youtubeVideoURL = "https://www.youtube.com/embed/0jai3gjF-Bg";;
  return (
    <div className="App">
      <div className="App-header">
        <WelcomePage/>
        <VideoPlayer src={youtubeVideoURL} width="750" height="500" />
      </div>
      
    </div>
  );
}

export default App;
