import { FiSearch, FiBell } from "react-icons/fi";

export const Header: React.FC = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold" style={{ color: "#024C6B" }}>
          Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <FiSearch className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <FiBell className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">J</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs" style={{ color: "#821952" }}>
                Organizer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
