import React, { useState } from 'react';
import { X } from 'lucide-react';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('onboarding1');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Navigation functions
  const navigateTo = (page) => setCurrentPage(page);

  // Render different pages based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'onboarding1':
        return <OnboardingOne onNext={() => navigateTo('onboarding2')} />;
      case 'onboarding2':
        return <OnboardingTwo onNext={() => navigateTo('login')} />;
      case 'login':
        return <Login 
          onRegister={() => navigateTo('register')}
          onForgotPassword={() => setShowForgotPassword(true)}
          onLogin={() => navigateTo('dashboard')}
        />;
      case 'register':
        return <Register onLogin={() => navigateTo('login')} />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <OnboardingOne onNext={() => navigateTo('onboarding2')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderPage()}
      {showForgotPassword && (
        <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
};

// Onboarding Pages
const OnboardingOne = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">Welcome to LearnPortal</h1>
      <p className="mb-4">Discover a world of knowledge at your fingertips.</p>
      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-black p-2 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  </div>
);

const OnboardingTwo = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">How It Works</h1>
      <p className="mb-4">Learn at your own pace with our curated courses.</p>
      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  </div>
);

// Authentication Components
const Login = ({ onRegister, onForgotPassword, onLogin }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={onForgotPassword}
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
        <p className="mt-2">
          Don't have an account?{' '}
          <button
            onClick={onRegister}
            className="text-blue-600 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  </div>
);

const Register = ({ onLogin }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <button
          onClick={onLogin}
          className="text-blue-600 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  </div>
);

const ForgotPasswordModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Reset Password</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Your learning journey starts here!</p>
      </div>
    </div>
  </div>
);

export default App;
