import { useParams } from 'react-router-dom';

export const EventsDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EventsDetail Page</h1>
      <p>Event ID: {params.id}</p>
    </>
  );
};
