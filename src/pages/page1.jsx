import { useState, useRef } from "react";
import Sezim from "../images/1.jpg";
import audioFile from "../mp3/1.mp3"; 

function Page1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef(null);

  const togglePlay = () => {  
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const stopPlayback = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="pages">
      <div>
        <img className="pageImg" src={Sezim} alt="" />
      </div>
      <div>
        <h1 className="audioH1">for you</h1>
        <audio ref={audioPlayer} src={audioFile} /> {/* Add the src attribute here */}
        <div>
          <button className="btn-start" onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
          <button className="btn-stop" onClick={stopPlayback}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
