import React from 'react';
import { Video, Calendar, MessageSquare, FileText } from 'lucide-react';

const Telemedicine = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Telemedicine Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="h-8 w-8 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Virtual Consultations</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Connect with healthcare professionals from the comfort of your home through secure video consultations.
          </p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-8 w-8 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800">No upcoming appointments</p>
              <p className="text-gray-600">Schedule your next consultation</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MessageSquare className="h-8 w-8 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-800">Message Doctor</h2>
          </div>
          <div className="space-y-4">
            <textarea
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={4}
              placeholder="Type your message here..."
            />
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Send Message
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-800">Medical Records</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Access and manage your medical records securely.
          </p>
          <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
            View Records
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">1. Schedule</h3>
            <p className="text-gray-600">Book an appointment with your preferred doctor</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">2. Connect</h3>
            <p className="text-gray-600">Join your virtual consultation securely</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">3. Follow-up</h3>
            <p className="text-gray-600">Receive treatment plans and prescriptions digitally</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;