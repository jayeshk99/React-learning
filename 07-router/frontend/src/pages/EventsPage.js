// import { Link } from 'react-router-dom';

// const DUMMY_LIST = [
//   { id: '1', title: 'One event' },
//   { id: '2', title: 'Two event' },
// ];
// export const EventsPage = () => {
//   return (
//     <>
//       <h1>Events Page</h1>
//       <ul>
//         {DUMMY_LIST.map((item) => (
//           <li key={item.id}>
//             {/* <Link to={`event/${item.id}`}></Link>   .............. this is the one way absolute route */}
//             <Link to={item.id}>{item.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export const EventsPage = () => {
  const events = useLoaderData();
  console.log('events:', events);
  return (
    <>
      <EventsList events={events}></EventsList>
    </>
  );
};
