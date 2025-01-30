import React from 'react';
import { Activity, Heart, Brain, Thermometer } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to HealthCare AI</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Heart className="h-8 w-8 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-800">Heart Rate</h2>
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-900">72 BPM</p>
          <p className="mt-2 text-sm text-gray-500">Normal range</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Activity className="h-8 w-8 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-800">Activity</h2>
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-900">8,432</p>
          <p className="mt-2 text-sm text-gray-500">Steps today</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-purple-500" />
            <h2 className="text-xl font-semibold text-gray-800">Mental State</h2>
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-900">Good</p>
          <p className="mt-2 text-sm text-gray-500">Based on recent activity</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Thermometer className="h-8 w-8 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-800">Temperature</h2>
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-900">98.6°F</p>
          <p className="mt-2 text-sm text-gray-500">Normal</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Health Recommendations</h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Activity className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Increase Daily Activity</h3>
              <p className="text-gray-600">Try to reach 10,000 steps today for optimal health benefits.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Heart className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Heart Health</h3>
              <p className="text-gray-600">Your heart rate has been consistent. Keep up the good work!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;