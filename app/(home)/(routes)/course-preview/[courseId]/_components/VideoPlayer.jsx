const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="border rounded-lg p-3">
      <h2 className="text-gray-400 mb-3  ">
        Course Preview
        <video width="1000" height="250" controls controlsList="nodownload">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </h2>
    </div>
  );
};
export default VideoPlayer;
