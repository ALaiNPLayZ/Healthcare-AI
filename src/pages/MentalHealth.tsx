import React, { useState } from 'react';
import { Brain, MessageCircle, BarChart } from 'lucide-react';

const MentalHealth = () => {
  const [mood, setMood] = useState('');
  const [stressLevel, setStressLevel] = useState('3');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save mental health data
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mental Health Tracker</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <label className="flex items-center space-x-2 text-gray-700 mb-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span>How are you feeling today?</span>
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select mood</option>
                <option value="happy">Happy</option>
                <option value="calm">Calm</option>
                <option value="anxious">Anxious</option>
                <option value="sad">Sad</option>
                <option value="stressed">Stressed</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 mb-2">
                <BarChart className="h-5 w-5 text-purple-500" />
                <span>Stress Level (1-5)</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={stressLevel}
                onChange={(e) => setStressLevel(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 mb-2">
                <MessageCircle className="h-5 w-5 text-purple-500" />
                <span>Notes</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={4}
                placeholder="How was your day? What's on your mind?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Save Entry
            </button>
          </div>
        </form>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Mental Health Support</h2>
          <p className="text-gray-600 mb-4">
            Based on your entries, our AI system provides personalized recommendations and support for your mental well-being.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800">Daily Tip</h3>
              <p className="text-purple-600">Try deep breathing exercises when feeling stressed.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800">Recommendation</h3>
              <p className="text-purple-600">Consider starting a gratitude journal to improve mental well-being.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;