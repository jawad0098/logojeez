import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

// Function to send status email (calls backend/cloud function)
async function sendStatusEmail({ email, name, status }) {
  try {
    // Change the URL to your backend server's endpoint
    await fetch('http://localhost:5000/send-status-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, status }),
    });
  } catch (e) {
    // Optionally handle error
  }
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [quoteRequests, setQuoteRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({}); // { [id]: true/false }
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Pagination logic
  const totalPages = Math.ceil(quoteRequests.length / pageSize);
  const paginatedRequests = quoteRequests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Accept or reject handler
  const handleStatusChange = async (id, status) => {
    setActionLoading(prev => ({ ...prev, [id]: true }));
    try {
      const ref = doc(db, 'quoteRequests', id);
      await updateDoc(ref, { status });
      setQuoteRequests(prev =>
        prev.map(q => (q.id === id ? { ...q, status } : q))
      );
      // Find the updated request to get email/name
      const updated = quoteRequests.find(q => q.id === id);
      if (updated) {
        await sendStatusEmail({
          email: updated.email,
          name: `${updated.firstName} ${updated.lastName}`,
          status,
        });
      }
    } catch (e) {
      // Optionally show error
    }
    setActionLoading(prev => ({ ...prev, [id]: false }));
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'quoteRequests'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuoteRequests(data);
      } catch (err) {
        setQuoteRequests([]);
      }
      setLoading(false);
    };
    fetchQuotes();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e0f7fa] via-[#f1f5f9] to-[#c7ecee] flex items-center justify-center py-40 px-1">
      <div className="w-full lg:w-[99%] max-w-[96rem]">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-[#14b8a6]/20 px-2 sm:px-8 py-8 sm:py-12 relative transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-[#14b8a6] text-center mb-3 tracking-tight drop-shadow">Admin Dashboard</h1>
          <p className="text-gray-600 text-center mb-10 text-lg">Welcome, Admin! You are logged in.</p>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-6 text-center">User Quote Requests</h2>
            <div className="bg-[#f8fafc]/80 rounded-2xl p-3 sm:p-6 shadow-inner border border-[#14b8a6]/10">
              {loading ? (
                <div className="text-center py-12 text-[#14b8a6] font-semibold text-lg">Loading...</div>
              ) : quoteRequests.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-lg">No quote requests found.</div>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm rounded-xl overflow-hidden shadow">
                      <thead className="bg-[#14b8a6]/10">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Name</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Email</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Service</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Budget</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Timeline</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Description</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Submitted</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Status</th>
                          <th className="px-4 py-3 text-left font-bold text-[#14b8a6] whitespace-nowrap">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        {paginatedRequests.map(q => (
                          <tr key={q.id} className="hover:bg-[#e0f7fa]/60 transition">
                            <td className="px-4 py-3 whitespace-nowrap">{q.firstName} {q.lastName}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{q.email}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{q.service}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{q.budget}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{q.timeline || '-'}</td>
                            <td className="px-4 py-3 max-w-xs truncate" title={q.description}>{q.description}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{q.createdAt?.toDate ? q.createdAt.toDate().toLocaleString() : '-'}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {q.status === 'accepted' && <span className="text-green-600 font-bold">Accepted</span>}
                              {q.status === 'rejected' && <span className="text-red-600 font-bold">Rejected</span>}
                              {!q.status && <span className="text-gray-500">Pending</span>}
                            </td>
                            <td className="px-4 py-3 space-x-2 whitespace-nowrap">
                              <button
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold shadow transition-all ${
                                  q.status === 'accepted' || actionLoading[q.id]
                                    ? 'bg-green-300 text-white cursor-not-allowed'
                                    : 'bg-green-500 hover:bg-green-600 text-white'
                                }`}
                                disabled={q.status === 'accepted' || actionLoading[q.id]}
                                onClick={() => handleStatusChange(q.id, 'accepted')}
                              >
                                Accept
                              </button>
                              <button
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold shadow transition-all ${
                                  q.status === 'rejected' || actionLoading[q.id]
                                    ? 'bg-red-300 text-white cursor-not-allowed'
                                    : 'bg-red-500 hover:bg-red-600 text-white'
                                }`}
                                disabled={q.status === 'rejected' || actionLoading[q.id]}
                                onClick={() => handleStatusChange(q.id, 'rejected')}
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Mobile Cards */}
                  <div className="sm:hidden flex flex-col gap-6">
                    {paginatedRequests.map(q => (
                      <div key={q.id} className="bg-white rounded-2xl shadow-lg p-4 border border-[#14b8a6]/10">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-bold text-[#14b8a6] text-lg">{q.firstName} {q.lastName}</div>
                          <div className="text-xs">
                            {q.status === 'accepted' && <span className="text-green-600 font-bold">Accepted</span>}
                            {q.status === 'rejected' && <span className="text-red-600 font-bold">Rejected</span>}
                            {!q.status && <span className="text-gray-500">Pending</span>}
                          </div>
                        </div>
                        <div className="text-xs text-gray-700 mb-1"><span className="font-semibold">Email:</span> {q.email}</div>
                        <div className="text-xs text-gray-700 mb-1"><span className="font-semibold">Service:</span> {q.service}</div>
                        <div className="text-xs text-gray-700 mb-1"><span className="font-semibold">Budget:</span> {q.budget}</div>
                        <div className="text-xs text-gray-700 mb-1"><span className="font-semibold">Timeline:</span> {q.timeline || '-'}</div>
                        <div className="text-xs text-gray-700 mb-1"><span className="font-semibold">Description:</span> <span className="break-words">{q.description}</span></div>
                        <div className="text-xs text-gray-700 mb-2"><span className="font-semibold">Submitted:</span> {q.createdAt?.toDate ? q.createdAt.toDate().toLocaleString() : '-'}</div>
                        <div className="flex gap-2 mt-2">
                          <button
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold shadow transition-all ${
                              q.status === 'accepted' || actionLoading[q.id]
                                ? 'bg-green-300 text-white cursor-not-allowed'
                                : 'bg-green-500 hover:bg-green-600 text-white'
                            }`}
                            disabled={q.status === 'accepted' || actionLoading[q.id]}
                            onClick={() => handleStatusChange(q.id, 'accepted')}
                          >
                            Accept
                          </button>
                          <button
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold shadow transition-all ${
                              q.status === 'rejected' || actionLoading[q.id]
                                ? 'bg-red-300 text-white cursor-not-allowed'
                                : 'bg-red-500 hover:bg-red-600 text-white'
                            }`}
                            disabled={q.status === 'rejected' || actionLoading[q.id]}
                            onClick={() => handleStatusChange(q.id, 'rejected')}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Pagination Controls */}
                  <div className="flex justify-center mt-6 gap-2">
                    <button
                      className="px-3 py-1 rounded bg-[#14b8a6] text-white font-bold disabled:bg-gray-300"
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx}
                        className={`px-3 py-1 rounded font-bold ${
                          currentPage === idx + 1
                            ? 'bg-[#0f172a] text-white'
                            : 'bg-gray-200 text-[#0f172a] hover:bg-[#14b8a6] hover:text-white'
                        }`}
                        onClick={() => setCurrentPage(idx + 1)}
                      >
                        {idx + 1}
                      </button>
                    ))}
                    <button
                      className="px-3 py-1 rounded bg-[#14b8a6] text-white font-bold disabled:bg-gray-300"
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages || totalPages === 0}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Logout button at the bottom, centered */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/admin-login')}
              className="bg-[#14b8a6] hover:bg-[#0f172a] text-white px-5 py-2 rounded-xl font-bold text-base shadow-md transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
