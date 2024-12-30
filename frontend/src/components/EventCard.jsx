import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{event.title}</h3>
      <p className="text-gray-700 text-sm mb-4">{event.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>{new Date(event.date).toLocaleDateString()}</span>
        <span className="text-gray-600 font-medium">{event.location}</span>
      </div>
      <Link 
        to={`/events/${event._id}`}
        className="inline-block bg-teal-500 text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  );
}

export default EventCard;
