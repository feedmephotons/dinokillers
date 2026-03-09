import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-7xl md:text-9xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">This page doesn't exist.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-brand-cyan transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
