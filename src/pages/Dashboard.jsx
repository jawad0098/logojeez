import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaClipboardList, FaComments, FaFileAlt, FaCreditCard } from 'react-icons/fa';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import ProjectDetail from './ProjectDetail';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [readMessageId, setReadMessageId] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllMessages, setShowAllMessages] = useState(false);

  // Reset showAllProjects/showAllMessages when tab changes
  useEffect(() => {
    setShowAllProjects(false);
    setShowAllMessages(false);
  }, [activeTab]);

  // Add state for password and delete modals
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [saveMessage, setSaveMessage] = useState('');

  // Dummy handlers for demo (replace with real logic)
  const handleChangePassword = async () => {
    setPasswordMessage('');
    if (!newPassword || newPassword.length < 6) {
      setPasswordMessage('Password must be at least 6 characters.');
      return;
    }
    // Implement real password update logic here
    setPasswordMessage('Password changed successfully!');
    setTimeout(() => {
      setShowPasswordModal(false);
      setNewPassword('');
      setPasswordMessage('');
    }, 1200);
  };

  const handleDeleteAccount = async () => {
    setDeleteMessage('');
    if (deleteConfirm !== 'DELETE') {
      setDeleteMessage('Type DELETE to confirm.');
      return;
    }
    // Implement real delete logic here
    setDeleteMessage('Account deleted (demo only).');
    setTimeout(() => {
      setShowDeleteModal(false);
      setDeleteConfirm('');
      setDeleteMessage('');
    }, 1200);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setSaveMessage('');
    // Implement real save logic here
    setSaveMessage('Profile updated successfully!');
    setTimeout(() => setSaveMessage(''), 1200);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser) return;
      
      try {
        // Fetch user projects
        const projectsQuery = query(
          collection(db, 'projects'),
          where('userId', '==', currentUser.uid)
        );
        
        const projectsSnapshot = await getDocs(projectsQuery);
        const projectsList = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProjects(projectsList);
        
        // Fetch user messages
        const messagesQuery = query(
          collection(db, 'messages'),
          where('userId', '==', currentUser.uid)
        );
        
        const messagesSnapshot = await getDocs(messagesQuery);
        const messagesList = messagesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setMessages(messagesList);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, [currentUser]);

  // Example data for dashboard display
  const sampleProjects = [
    {
      id: 'p1',
      title: 'Company Logo Design',
      status: 'In Progress',
      lastUpdate: '2025-03-15',
      progress: 65
    },
    {
      id: 'p2',
      title: 'Business Card Design',
      status: 'Completed',
      lastUpdate: '2025-03-10',
      progress: 100
    },
    {
      id: 'p3',
      title: 'Brand Identity Package',
      status: 'Review',
      lastUpdate: '2025-03-18',
      progress: 85
    }
  ];
  
  const sampleMessages = [
    {
      id: 'm1',
      from: 'Design Team',
      subject: 'Logo Design Update',
      date: '2025-03-18',
      read: false
    },
    {
      id: 'm2',
      from: 'Support Team',
      subject: 'Your recent inquiry',
      date: '2025-03-16',
      read: true
    }
  ];

  const displayedProjects = projects.length > 0 ? projects : sampleProjects;
  const displayedMessages = messages.length > 0 ? messages : sampleMessages;

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-[#f1f5f9] via-[#e0f7fa] to-[#f1f5f9] font-sans">
      <div className="container mx-auto px-2 sm:px-4 py-8">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl border border-[#14b8a6]/10 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-[#14b8a6] via-[#06b6d4] to-[#0ea5e9] text-white p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="bg-white text-[#14b8a6] rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-4 border-[#14b8a6]/20">
                  <FaUser size={28} />
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold mb-1 drop-shadow">Welcome, {currentUser?.displayName || 'Client'}</h1>
                  <p className="text-white/80 font-medium text-base">Manage your projects and account</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link 
                  to="/get-quote" 
                  className="bg-white text-[#14b8a6] hover:bg-[#0f172a] hover:text-white px-5 py-2 rounded-lg font-bold transition-all shadow text-sm"
                >
                  Request New Project
                </Link>
                {/* <Link 
                  to="/about" 
                  className="bg-white text-[#14b8a6] hover:bg-[#0f172a] hover:text-white px-6 py-2 rounded-lg font-bold transition-all shadow"
                >
                  About Us
                </Link> */}
              </div>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <div className="border-b bg-[#f8fafc]">
            <div className="flex overflow-x-auto justify-center">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'projects', label: 'Projects' },
                { key: 'messages', label: 'Messages' },
                { key: 'invoices', label: 'Invoices' },
                { key: 'profile', label: 'Profile' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-4 font-bold text-base transition-all border-b-2 ${
                    activeTab === tab.key
                      ? 'border-[#14b8a6] text-[#14b8a6] bg-white'
                      : 'border-transparent text-gray-500 hover:text-[#14b8a6] hover:bg-[#f1f5f9]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-4 sm:p-6 bg-[#f8fafc]">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#14b8a6]"></div>
              </div>
            ) : (
              <>
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <motion.div 
                        className="bg-white p-6 rounded-2xl shadow border border-[#14b8a6]/10 flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="bg-[#14b8a6]/10 p-4 rounded-full">
                          <FaClipboardList className="text-[#14b8a6] text-2xl" />
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium text-sm">Active Projects</p>
                          <h3 className="text-2xl font-extrabold">{displayedProjects.filter(p => p.status !== 'Completed').length}</h3>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="bg-white p-6 rounded-2xl shadow border border-[#14b8a6]/10 flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <div className="bg-[#14b8a6]/10 p-4 rounded-full">
                          <FaComments className="text-[#14b8a6] text-2xl" />
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium text-sm">New Messages</p>
                          <h3 className="text-2xl font-extrabold">{displayedMessages.filter(m => !m.read).length}</h3>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="bg-white p-6 rounded-2xl shadow border border-[#14b8a6]/10 flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="bg-[#14b8a6]/10 p-4 rounded-full">
                          <FaFileAlt className="text-[#14b8a6] text-2xl" />
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium text-sm">Completed Projects</p>
                          <h3 className="text-2xl font-extrabold">{displayedProjects.filter(p => p.status === 'Completed').length}</h3>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <div className="bg-white p-8 rounded-2xl shadow border border-[#14b8a6]/10">
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-[#0f172a]">Recent Projects</h3>
                            <button
                              className="text-sm text-[#14b8a6] hover:underline font-semibold"
                              onClick={() => setShowAllProjects((v) => !v)}
                            >
                              {showAllProjects ? 'Show Less' : 'View all'}
                            </button>
                          </div>
                          <div className="space-y-6">
                            {(showAllProjects ? displayedProjects : displayedProjects.slice(0, 3)).map(project => (
                              <div key={project.id} className="border-b border-[#f1f5f9] pb-4 last:border-b-0 last:pb-0">
                                <div className="flex justify-between mb-1">
                                  <h4 className="font-semibold text-[#0f172a]">{project.title}</h4>
                                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                                    project.status === 'Completed' 
                                      ? 'bg-green-100 text-green-700' 
                                      : project.status === 'In Progress'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                  }`}>
                                    {project.status}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500">Last updated: {project.lastUpdate}</p>
                                <div className="mt-2 bg-gray-100 rounded-full h-2">
                                  <div 
                                    className="bg-[#14b8a6] h-2 rounded-full" 
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <div className="bg-white p-8 rounded-2xl shadow border border-[#14b8a6]/10">
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-[#0f172a]">Recent Messages</h3>
                            <button
                              className="text-sm text-[#14b8a6] hover:underline font-semibold"
                              onClick={() => setShowAllMessages((v) => !v)}
                            >
                              {showAllMessages ? 'Show Less' : 'View all'}
                            </button>
                          </div>
                          <div className="space-y-6">
                            {(showAllMessages ? displayedMessages : displayedMessages.slice(0, 4)).map(message => (
                              <div key={message.id} className="border-b border-[#f1f5f9] pb-4 last:border-b-0 last:pb-0">
                                <div className="flex justify-between mb-1">
                                  <h4 className="font-semibold text-[#0f172a]">{message.subject}</h4>
                                  {!message.read && <span className="bg-[#14b8a6]/10 text-[#14b8a6] text-xs px-2 py-1 rounded-full font-bold">New</span>}
                                </div>
                                <p className="text-xs text-gray-500">From: {message.from}</p>
                                <p className="text-xs text-gray-500">Date: {message.date}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}
                
                {/* Projects Tab */}
                {activeTab === 'projects' && (
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                      <h2 className="text-2xl font-bold text-[#0f172a]">Your Projects</h2>
                      <Link 
                        to="/get-quote" 
                        className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-6 py-2 rounded-lg font-bold transition-all shadow"
                      >
                        New Project
                      </Link>
                    </div>
                    
                    {displayedProjects.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-gray-500 mb-4">You don't have any projects yet.</p>
                        <Link 
                          to="/get-quote" 
                          className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-8 py-3 rounded-lg font-bold transition-all shadow"
                        >
                          Start Your First Project
                        </Link>
                      </div>
                    ) : (
                      <div className="bg-white rounded-2xl shadow border border-[#14b8a6]/10 overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-[#f8fafc]">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-bold text-[#14b8a6] uppercase tracking-wider">Project Name</th>
                              <th className="px-6 py-3 text-left text-xs font-bold text-[#14b8a6] uppercase tracking-wider">Status</th>
                              <th className="px-6 py-3 text-left text-xs font-bold text-[#14b8a6] uppercase tracking-wider">Last Update</th>
                              <th className="px-6 py-3 text-left text-xs font-bold text-[#14b8a6] uppercase tracking-wider">Progress</th>
                              <th className="px-6 py-3 text-right text-xs font-bold text-[#14b8a6] uppercase tracking-wider">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {displayedProjects.map((project) => (
                              <tr key={project.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="font-semibold text-[#0f172a]">{project.title}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    project.status === 'Completed' 
                                      ? 'bg-green-100 text-green-800' 
                                      : project.status === 'In Progress'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {project.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {project.lastUpdate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div 
                                      className="bg-[#14b8a6] h-2.5 rounded-full" 
                                      style={{ width: `${project.progress}%` }}
                                    ></div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <Link to={`/dashboard/projects/${project.id}`} className="text-[#14b8a6] hover:text-[#0f172a] font-bold">
                                    View
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Messages Tab */}
                {activeTab === 'messages' && (
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-bold text-[#0f172a]">Your Messages</h2>
                    </div>
                    
                    {displayedMessages.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-gray-500">You don't have any messages yet.</p>
                      </div>
                    ) : (
                      <div className="bg-white rounded-2xl shadow border border-[#14b8a6]/10 overflow-hidden">
                        <div className="divide-y divide-[#f1f5f9]">
                          {displayedMessages.map((message) => (
                            <div key={message.id} className={`p-5 hover:bg-[#f8fafc] transition-colors ${!message.read ? 'bg-[#e0f7fa]/60' : ''}`}>
                              <div className="flex justify-between mb-1">
                                <h3 className="font-semibold text-[#0f172a]">{message.subject}</h3>
                                <span className="text-xs text-gray-500">{message.date}</span>
                              </div>
                              <p className="text-sm text-gray-600">From: {message.from}</p>
                              <div className="mt-2 flex justify-end">
                                <button
                                  className="text-[#14b8a6] hover:text-[#0f172a] text-sm font-bold"
                                  onClick={() => setReadMessageId(message.id)}
                                >
                                  Read Message
                                </button>
                              </div>
                              {/* Show message content if this message is selected */}
                              {readMessageId === message.id && (
                                <div className="mt-4 p-4 bg-[#f1f5f9] rounded text-gray-800 border border-[#14b8a6]/10">
                                  <div>
                                    <strong>Message Content:</strong>
                                    <div className="mt-2">
                                      {message.content || "This is a sample message content. (Replace with actual message body from your backend.)"}
                                    </div>
                                  </div>
                                  <div className="flex justify-end mt-3">
                                    <button
                                      className="text-xs text-[#14b8a6] hover:underline"
                                      onClick={() => setReadMessageId(null)}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Invoices Tab */}
                {activeTab === 'invoices' && (
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-bold text-[#0f172a]">Invoices & Payments</h2>
                    </div>
                    
                    <div className="text-center py-16 bg-white rounded-2xl shadow border border-[#14b8a6]/10">
                      <FaCreditCard className="mx-auto text-gray-300 text-5xl mb-4" />
                      <h3 className="text-lg font-bold mb-2">No Invoices Yet</h3>
                      <p className="text-gray-500 mb-6">You don't have any invoices or payments at the moment.</p>
                      <Link 
                        to="/get-quote" 
                        className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-8 py-3 rounded-lg font-bold transition-all shadow"
                      >
                        Start a New Project
                      </Link>
                    </div>
                  </div>
                )}
                
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Account Information</h2>
                    
                    <form
                      className="bg-white rounded-2xl shadow border border-[#14b8a6]/10 p-8"
                      onSubmit={handleSaveChanges}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-medium text-gray-500 mb-2">Name</h3>
                          <p className="text-lg font-bold">{currentUser?.displayName || 'N/A'}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-500 mb-2">Email</h3>
                          <p className="text-lg font-bold">{currentUser?.email}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-500 mb-2">Account Created</h3>
                          <p className="text-lg font-bold">{currentUser?.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
                        </div>
                      </div>
                      
                      <div className="mt-10 pt-8 border-t border-[#f1f5f9]">
                        <h3 className="font-semibold mb-4 text-[#14b8a6]">Update Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label htmlFor="updateFirstName" className="block text-gray-700 mb-1">First Name</label>
                            <input
                              type="text"
                              id="updateFirstName"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                              defaultValue={currentUser?.displayName?.split(' ')[0] || ''}
                            />
                          </div>
                          <div>
                            <label htmlFor="updateLastName" className="block text-gray-700 mb-1">Last Name</label>
                            <input
                              type="text"
                              id="updateLastName"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                              defaultValue={currentUser?.displayName?.split(' ')[1] || ''}
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="updatePhone" className="block text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            id="updatePhone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                            defaultValue={currentUser?.phoneNumber || ''}
                          />
                        </div>
                        {saveMessage && (
                          <div className={`mb-3 text-sm ${saveMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                            {saveMessage}
                          </div>
                        )}
                        <button
                          type="submit"
                          className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-6 py-2 rounded-lg font-bold transition-all shadow"
                        >
                          Save Changes
                        </button>
                      </div>
                      
                      <div className="mt-10 pt-8 border-t border-[#f1f5f9]">
                        <h3 className="font-semibold mb-4 text-[#14b8a6]">Security</h3>
                        <button
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium transition-all mr-4"
                          onClick={() => setShowPasswordModal(true)}
                          type="button"
                        >
                          Change Password
                        </button>
                        <button
                          className="text-red-600 hover:text-red-700 font-medium"
                          onClick={() => setShowDeleteModal(true)}
                          type="button"
                        >
                          Delete Account
                        </button>
                      </div>
                    </form>
                    {/* Change Password Modal */}
                    {showPasswordModal && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 relative">
                          <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-[#14b8a6] text-2xl font-bold"
                            onClick={() => setShowPasswordModal(false)}
                            aria-label="Close"
                          >
                            &times;
                          </button>
                          <h3 className="text-xl font-bold mb-4 text-[#14b8a6]">Change Password</h3>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                          />
                          {passwordMessage && (
                            <div className={`mb-2 text-sm ${passwordMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                              {passwordMessage}
                            </div>
                          )}
                          <button
                            className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-6 py-2 rounded-lg font-bold transition-all w-full"
                            onClick={handleChangePassword}
                          >
                            Update Password
                          </button>
                        </div>
                      </div>
                    )}
                    {/* Delete Account Modal */}
                    {showDeleteModal && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 relative">
                          <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-[#14b8a6] text-2xl font-bold"
                            onClick={() => setShowDeleteModal(false)}
                            aria-label="Close"
                          >
                            &times;
                          </button>
                          <h3 className="text-xl font-bold mb-4 text-red-600">Delete Account</h3>
                          <p className="mb-3 text-gray-700">
                            Type <span className="font-bold">DELETE</span> to confirm account deletion.
                          </p>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Type DELETE to confirm"
                            value={deleteConfirm}
                            onChange={e => setDeleteConfirm(e.target.value)}
                          />
                          {deleteMessage && (
                            <div className={`mb-2 text-sm ${deleteMessage.includes('deleted') ? 'text-green-600' : 'text-red-600'}`}>
                              {deleteMessage}
                            </div>
                          )}
                          <button
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-all w-full"
                            onClick={handleDeleteAccount}
                          >
                            Delete Account
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}