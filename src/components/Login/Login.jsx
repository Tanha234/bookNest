// src/pages/Auth.js
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon

function Login() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("✅ User signed in with Google:", result.user);
      navigate('/');  // Redirect to the dashboard or home page
    } catch (error) {
      setError(error.message);
      console.error("❌ Firebase error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("✅ User signed up:", email);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ User signed in:", email);
      }
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      console.error("❌ Firebase error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screenmy-16">
      <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-lg shadow-lg  border border-gray-300  my-16">
        <h1 className="text-3xl font-semibold text-center">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 ">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
                className="mt-1 block w-full px-3 py-2 border border-indigo-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-2 px-4 bg-indigo-900 text-white font-semibold rounded-lg focus:outline-none hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {loading ? 'Submitting...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="text-center">
          <button 
            onClick={handleGoogleSignIn} 
            disabled={loading}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-semibold flex items-center justify-center space-x-2 focus:outline-none hover:bg-gray-100 disabled:bg-gray-200"
          >
            <FaGoogle className="text-lg" />
            <span>{loading ? 'Signing in with Google...' : 'Sign in with Google'}</span>
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button 
              onClick={() => setIsSignUp(!isSignUp)} 
              className="text-indigo-600 hover:text-indigo-800 font-semibold "
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
