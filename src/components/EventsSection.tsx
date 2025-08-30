import { Event } from "../types";

interface EventsSectionProps {
  events: Event[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Events</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-teal-600 text-white rounded-lg text-sm">
            Ongoing
          </button>
          <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
            Upcoming
          </button>
          <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
            Past
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <div
                className={`absolute inset-0 ${
                  index % 3 === 0
                    ? "bg-gradient-to-br from-orange-400 to-red-500"
                    : index % 3 === 1
                    ? "bg-gradient-to-br from-gray-800 to-gray-900"
                    : "bg-gradient-to-br from-purple-500 to-pink-500"
                }`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <h4 className="text-white font-semibold text-sm">
                  {event.name}
                </h4>
                <p className="text-white text-xs opacity-90">
                  Tuesday, October 1
                </p>
              </div>
              <button className="absolute top-2 right-2 p-1 text-white hover:bg-white hover:bg-opacity-20 rounded">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
