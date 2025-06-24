import { useNavigate } from "react-router-dom";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg shadow-xl p-6 sm:p-8 max-w-xs w-full">
      <div className="text-md sm:text-3xl font-bold text-center text-gray-800 mb-4">
        Access Denied
      </div>
      <p className="text-xs sm:text-base text-center text-gray-600 mb-6">
        You need to be logged in to access this page.
      </p>
      <button
        onClick={() => navigate("/login")}
        className="w-full cursor-pointer text-black rounded-full py-2 px-4 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm transition-colors duration-200"
      >
        Go to Login
      </button>
    </div>
  );
};

export default AccessDenied;
