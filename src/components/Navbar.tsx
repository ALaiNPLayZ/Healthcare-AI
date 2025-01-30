import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Brain, Video, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">HealthCare AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/health-tracker" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Activity className="h-5 w-5" />
              <span>Health Tracker</span>
            </Link>
            <Link to="/mental-health" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Brain className="h-5 w-5" />
              <span>Mental Health</span>
            </Link>
            <Link to="/telemedicine" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Video className="h-5 w-5" />
              <span>Telemedicine</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;