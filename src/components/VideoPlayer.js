import ReactPlayer from "react-player";

const VideoPlayer = ({ videoID, handleVideoEnded }) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoID}`}
      onEnded={handleVideoEnded}
      controls={true}
      loop={false}
      config={{
        youtube: {
          playerVars: {
            rel: 0,
          },
        },
      }}
    />
  );
};
export default VideoPlayer;
