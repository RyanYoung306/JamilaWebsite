import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import VideoPlayer from './components/VideoPlayer';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <WelcomePage/>
        <VideoPlayer 
        src="/public/ValintiesFinalVideoFinished.mp4"
        width="750" 
        height="500" 
      />
      </div>
      
    </div>
  );
}

export default App;
