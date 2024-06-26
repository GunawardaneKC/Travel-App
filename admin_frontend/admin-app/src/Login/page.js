
import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('token', 'fake-jwt-token');
      alert('Login successful!');
      window.location.reload();
      // Redirect to another page or perform other actions as needed
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: 'url(https://bitsum.com/wp-content/uploads/dark-background-images-5561-5821-hd-wallpapers.jpg?w=640)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fallback color for transparency
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <form className="overflow-hidden bg-white border-4 border-blue-400 shadow-2xl dark:bg-zinc-900 rounded-2xl dark:border-blue-800" onSubmit={handleSubmit}>
          <div className="px-8 py-10 md:px-10">
            <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
              ALEX DUNN TOURS
            </h2>
            <p className="mt-3 text-center text-zinc-600 dark:text-zinc-400">
              sign up to continue.
            </p>
            <div className="mt-10">
              <div className="relative">
                <label
                  className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  placeholder="Enter username"
                  className="block w-full px-4 py-3 mt-2 bg-white border-2 rounded-lg text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  name="username"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <label
                  className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  placeholder="••••••••"
                  className="block w-full px-4 py-3 mt-2 bg-white border-2 rounded-lg text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              {/* <div className="mt-6">
                <label
                  className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  placeholder="••••••••"
                  className="block w-full px-4 py-3 mt-2 bg-white border-2 rounded-lg text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}



              

              

             
              {error && <div className="mt-4 text-center text-red-500">{error}</div>}
              <div className="mt-10">
                <button
                  className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                  type="submit"
                >
                  Sign Up
                </button>
                
              </div>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
