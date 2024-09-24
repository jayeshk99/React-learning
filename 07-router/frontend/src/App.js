// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/Root';
import { EventsPage } from './pages/EventsPage';
import { EventsDetailPage } from './pages/EventDetailsPage';
import { NewEventsPage } from './pages/NewEventPage';
import { EditEventsPage } from './pages/EditEventPage';
import { HomePage } from './pages/HomePage';
import EventRootLayout from './pages/EventRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      // {
      //   path: '/events',
      //   element: <EventsPage />,
      // },
      // {
      //   path: 'events/:id',
      //   element: <EventsDetailPage />,
      // },
      // {
      //   path: 'events/new',
      //   element: <NewEventsPage />,
      // },
      // {
      //   path: 'events/:id/new',
      //   element: <EditEventsPage />,
      // },
      {
        path: '/events',
        element: <EventRootLayout />,
        children: [
          {
            path: '',
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch('http://localhost:8080/events');
              if (!response.ok) {
                //
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ':id', element: <EventsDetailPage /> },
          { path: 'new', element: <NewEventsPage /> },
          { path: ':id/new', element: <EditEventsPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
