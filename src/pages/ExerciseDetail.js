
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import { fetchData, exerciseOptions, videoOptions } from '../api/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://wger.de/api/v2/exercise/';
      const videoSearchUrl = 'https://wger.de/api/v2/video/';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${videoSearchUrl}/search?query=${exerciseDetailData.name} exercise`, videoOptions);
      setExerciseVideos(exerciseVideosData.contents);

    };
    
    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div className="mt-16 lg:mt-24">
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
    </div>
  );
};

export default ExerciseDetail;
