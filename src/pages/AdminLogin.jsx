import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaExclamationTriangle } from 'react-icons/fa';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Hardcoded admin credentials
    if (email === 'admin' && password === 'admin') {
      navigate('/admin-dashboard');
    } else {
      setError('Invalid admin credentials');
    }
    setLoading(false);
  };

  return (
    <div className="pt-16 min-h-screen bg-[#f1f5f9]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#14b8a6]/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#0f172a]">Admin Login</h1>
              <p className="text-gray-600 mt-2">Sign in as admin to continue</p>
            </div>
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-center mb-6">
                <FaExclamationTriangle className="mr-3 text-red-500" />
                <p>{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] border-gray-300"
                    placeholder="admin"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="username"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-500" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] border-gray-300"
                    placeholder="admin"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-[#14b8a6] border-gray-300 rounded focus:ring-[#14b8a6]"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                {/* No forgot password for admin */}
              </div>
              <button
                type="submit"
                className="w-full bg-[#14b8a6] hover:bg-[#0f172a] text-white py-3 rounded-lg font-bold transition-all flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                ) : (
                  'Login as Admin'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
