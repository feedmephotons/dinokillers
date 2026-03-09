import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div className="pt-20 min-h-screen flex flex-col items-center justify-center gap-6">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <Link to="/" className="text-brand-cyan hover:text-white transition-colors underline">
      Back to Home
    </Link>
  </div>
);

export default NotFoundPage;
