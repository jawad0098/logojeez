import { useParams, Link } from 'react-router-dom';

const sampleProjects = [
  {
    id: 'p1',
    title: 'Company Logo Design',
    status: 'In Progress',
    lastUpdate: '2025-03-15',
    progress: 65,
    description: 'A modern logo design project for a tech company.',
    details: 'This project involves creating a unique and modern logo for a technology company, focusing on simplicity and brand recognition.',
  },
  {
    id: 'p2',
    title: 'Business Card Design',
    status: 'Completed',
    lastUpdate: '2025-03-10',
    progress: 100,
    description: 'Professional business card design for client networking.',
    details: 'Designed double-sided business cards with a clean, professional look, matching the client\'s brand identity.',
  },
  {
    id: 'p3',
    title: 'Brand Identity Package',
    status: 'Review',
    lastUpdate: '2025-03-18',
    progress: 85,
    description: 'Complete brand identity package for a startup.',
    details: 'Includes logo, color palette, typography, and brand guidelines for a new startup.',
  }
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = sampleProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen bg-[#f1f5f9] flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow border border-[#14b8a6]/10 text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#0f172a]">Project Not Found</h2>
          <p className="mb-4 text-gray-600">Sorry, the requested project does not exist.</p>
          <Link to="/dashboard" className="text-[#14b8a6] font-bold hover:underline">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#f1f5f9]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-[#14b8a6]/10">
          <h1 className="text-2xl font-bold text-[#0f172a] mb-2">{project.title}</h1>
          <div className="mb-3 flex gap-2 items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              project.status === 'Completed'
                ? 'bg-green-100 text-green-700'
                : project.status === 'In Progress'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-yellow-100 text-yellow-700'
            }`}>
              {project.status}
            </span>
            <span className="text-gray-500 text-xs">Last updated: {project.lastUpdate}</span>
          </div>
          <div className="mb-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#14b8a6] h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">{project.progress}% Complete</div>
          </div>
          <p className="text-gray-700 mb-3 text-sm">{project.description}</p>
          <div className="mb-5">
            <h2 className="text-base font-semibold text-[#14b8a6] mb-1">Project Details</h2>
            <p className="text-gray-700 text-sm">{project.details}</p>
          </div>
          <Link
            to="/dashboard"
            className="inline-block bg-[#14b8a6] hover:bg-[#0f172a] text-white px-5 py-2 rounded-lg font-bold transition-all text-sm"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
