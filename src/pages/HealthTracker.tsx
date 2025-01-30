import React, { useState } from 'react';
import { Activity, Weight, Ruler, Heart, Thermometer } from 'lucide-react';

const HealthTracker = () => {
  const [metrics, setMetrics] = useState({
    height: '',
    weight: '',
    bloodPressure: '',
    heartRate: '',
    temperature: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save health metrics
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Health Metrics Tracker</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <Ruler className="h-5 w-5 text-blue-500" />
              <span>Height (cm)</span>
            </label>
            <input
              type="number"
              value={metrics.height}
              onChange={(e) => setMetrics({ ...metrics, height: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter height"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <Weight className="h-5 w-5 text-blue-500" />
              <span>Weight (kg)</span>
            </label>
            <input
              type="number"
              value={metrics.weight}
              onChange={(e) => setMetrics({ ...metrics, weight: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter weight"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <span>Blood Pressure</span>
            </label>
            <input
              type="text"
              value={metrics.bloodPressure}
              onChange={(e) => setMetrics({ ...metrics, bloodPressure: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 120/80"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <Heart className="h-5 w-5 text-blue-500" />
              <span>Heart Rate (BPM)</span>
            </label>
            <input
              type="number"
              value={metrics.heartRate}
              onChange={(e) => setMetrics({ ...metrics, heartRate: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter heart rate"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <Thermometer className="h-5 w-5 text-blue-500" />
              <span>Temperature (°F)</span>
            </label>
            <input
              type="number"
              value={metrics.temperature}
              onChange={(e) => setMetrics({ ...metrics, temperature: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter temperature"
              step="0.1"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Health Metrics
        </button>
      </form>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Insights</h2>
        <p className="text-gray-600">Track your health metrics over time to receive personalized insights and recommendations.</p>
      </div>
    </div>
  );
};

export default HealthTracker;