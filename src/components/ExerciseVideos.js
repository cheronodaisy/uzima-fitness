import React from 'react';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "No videos available for this exercise.";

  return (
    <div className="mt-20 p-5 lg:p-10">
      <h2 className="text-3xl lg:text-5xl font-bold mb-8">
        Watch <span className="text-red-600 capitalize">{name}</span> exercise videos
      </h2>
      <div className="flex flex-wrap lg:flex-row flex-col justify-start items-start gap-8">
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video flex flex-col lg:flex-row items-start lg:items-center bg-white rounded-lg shadow-md overflow-hidden"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img className="lg:w-1/3 w-full h-auto lg:h-auto lg:border-r-2 border-gray-200" src={item.video.thumbnails[0].url} alt={item.video.title} style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} />
            <div className="lg:w-2/3 w-full p-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">{item.video.title}</h3>
              <p className="text-sm lg:text-base text-gray-600">{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
