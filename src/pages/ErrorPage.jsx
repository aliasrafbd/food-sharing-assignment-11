import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
      {/* Icon */}
      <AlertTriangle size={80} className="text-red-500" />

      {/* Error Message */}
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mt-6">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
