import "./App.css";
import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
function App() {
  const [hasEnded, setHasEnded] = useState(false);
  const handleVideoEnded = () => {
    setHasEnded(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <VideoPlayer
          videoID="1H6lPlQ7jr8"
          handleVideoEnded={handleVideoEnded}
        />
        <p>Video Ended?: {hasEnded ? "True" : "False"}</p>
      </header>
    </div>
  );
}

export default App;
