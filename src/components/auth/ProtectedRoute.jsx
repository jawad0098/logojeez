import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  
  // If we're still loading, show a loading spinner
  if (currentUser === undefined) {
    return <LoadingSpinner />;
  }
  
  // If user is not logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/login\" replace />;
  }
  
  // If user is logged in, render children
  return children;
}