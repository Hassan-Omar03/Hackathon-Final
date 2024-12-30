import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById, rsvpToEvent } from '../services/eventService';
import { useSelector } from 'react-redux';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEventById(id);
        setEvent(response.data);
      } catch (error) {
        console.error('Failed to fetch event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleRSVP = async () => {
    try {
      const response = await rsvpToEvent(id);
      setEvent(response.data);
    } catch (error) {
      console.error('Failed to RSVP:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">Event not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{event.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{event.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-gray-800">Date & Time</h3>
            <p className="text-gray-600">{new Date(event.date).toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-gray-800">Location</h3>
            <p className="text-gray-600">{event.location}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-gray-800">Category</h3>
            <p className="text-gray-600 capitalize">{event.category}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-gray-800">Attendees</h3>
            <p className="text-gray-600">{event.attendees?.length || 0}</p>
          </div>
        </div>
        {isAuthenticated && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleRSVP}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              RSVP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetails;
