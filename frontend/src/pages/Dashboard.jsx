import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure } from '../store/slices/eventSlice';
import { getUserEvents } from '../services/eventService';
import EventCard from '../components/EventCard';

function Dashboard() {
  const dispatch = useDispatch();
  const { events, loading } = useSelector((state) => state.events);

  useEffect(() => {
    const loadEvents = async () => {
      dispatch(fetchEventsStart());
      try {
        const response = await getUserEvents();
        dispatch(fetchEventsSuccess(response.data));
      } catch (error) {
        dispatch(fetchEventsFailure(error.message));
      }
    };

    loadEvents();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        My Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
