import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Users } from 'lucide-react';
import { useAuth } from '../stores/authStore';

export function Navigation() {
  const location = useLocation();
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Top 10 Most Wanted
          </Link>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                >
                  <Shield className="w-5 h-5" />
                  <span>Admin Dashboard</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={login}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Admin Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}