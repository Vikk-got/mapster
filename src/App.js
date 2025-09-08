import React, { useState } from 'react';
import mockData from './mockData';
import Map from './Map';

function App() {
  const [issues, setIssues] = useState(mockData);

  const handleSubmit = () => {
    const lat = parseFloat(document.getElementById('latitude').value);
    const lng = parseFloat(document.getElementById('longitude').value);
    const description = document.getElementById('description').value;

    if (!isNaN(lat) && !isNaN(lng) && description) {
      const newIssue = {
        id: Date.now(),
        location: { lat, lng },
        description,
        image: 'https://via.placeholder.com/150', // Placeholder image
      };
      setIssues((prevIssues) => [...prevIssues, newIssue]);
      alert('Issue submitted successfully!');
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Rural Development Tracker</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    rows="3"
                    placeholder="Enter a short description of the issue"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                    Image
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="file"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="latitude">
                      Latitude
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="latitude"
                      type="text"
                      placeholder="Enter latitude"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="longitude">
                      Longitude
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="longitude"
                      type="text"
                      placeholder="Enter longitude"
                    />
                  </div>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit Issue
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Issues Map</h2>
              <Map issues={issues} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recent Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {issues.map((issue) => (
              <div key={issue.id} className="bg-white p-6 rounded-lg shadow-md">
                <img src={issue.image} alt={issue.description} className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-gray-700">{issue.description}</p>
                <p className="text-gray-500 text-sm mt-2">{`Lat: ${issue.location.lat}, Lng: ${issue.location.lng}`}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;