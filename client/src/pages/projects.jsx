import { useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { AppContext } from '../context/AppContext';

function Projects() {

  // GLOBAL CONTEXT
  const { projects, setProjects } = useContext(AppContext);

  // MODAL STATE
  const [showModal, setShowModal] = useState(false);

  // EDIT ID
  const [editId, setEditId] = useState(null);

  // FORM DATA
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    status: 'Active',
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD PROJECT
  const addProject = () => {

    if (
      !projectData.title ||
      !projectData.description
    ) {
      alert('Please fill all fields');
      return;
    }

    const newProject = {
      id: Date.now(),
      ...projectData,
    };

    setProjects([...projects, newProject]);

    resetForm();
  };

  // DELETE PROJECT
  const deleteProject = (id) => {

    const filteredProjects = projects.filter(
      (project) => project.id !== id
    );

    setProjects(filteredProjects);
  };

  // EDIT PROJECT
  const editProject = (project) => {

    setProjectData({
      title: project.title,
      description: project.description,
      status: project.status,
    });

    setEditId(project.id);

    setShowModal(true);
  };

  // UPDATE PROJECT
  const updateProject = () => {

    const updatedProjects = projects.map((project) =>

      project.id === editId
        ? {
            ...projectData,
            id: editId,
          }
        : project
    );

    setProjects(updatedProjects);

    resetForm();
  };

  // RESET FORM
  const resetForm = () => {

    setProjectData({
      title: '',
      description: '',
      status: 'Active',
    });

    setEditId(null);

    setShowModal(false);
  };

  return (
    <div className='flex bg-[#f5f7fb] min-h-screen'>

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className='flex-1 p-10 overflow-hidden'>

        {/* HEADER */}
        <div className='flex justify-between items-center mb-10'>

          <div>

            <h1 className='text-5xl font-bold text-gray-800'>
              Projects
            </h1>

            <p className='text-gray-500 mt-2'>
              Manage company projects efficiently
            </p>

          </div>

          <button
            onClick={() => setShowModal(true)}
            className='bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl shadow-md'
          >
            Add Project
          </button>

        </div>

        {/* PROJECT GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {projects.length > 0 ? (

            projects.map((project) => (

              <div
                key={project.id}
                className='bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300'
              >

                {/* CARD HEADER */}
                <div className='flex justify-between items-start mb-4'>

                  <h2 className='text-2xl font-bold text-gray-800'>
                    {project.title}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-xl text-sm font-medium

                    ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-600'
                        : project.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-blue-100 text-blue-600'
                    }
                    `}
                  >
                    {project.status}
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p className='text-gray-500 mb-6 leading-relaxed'>
                  {project.description}
                </p>

                {/* ACTION BUTTONS */}
                <div className='flex gap-3'>

                  <button
                    onClick={() => editProject(project)}
                    className='bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-xl'
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className='bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-xl'
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))

          ) : (

            <div className='col-span-full bg-white p-10 rounded-3xl text-center text-gray-400 shadow-lg'>

              No Projects Available

            </div>
          )}

        </div>

        {/* MODAL */}
        {showModal && (

          <div className='fixed inset-0 bg-black/40 flex justify-center items-center z-50'>

            <div className='bg-white p-8 rounded-3xl w-[500px] shadow-2xl'>

              {/* MODAL HEADER */}
              <div className='flex justify-between items-center mb-6'>

                <h2 className='text-3xl font-bold'>

                  {editId ? 'Edit Project' : 'Add Project'}

                </h2>

                <button
                  onClick={resetForm}
                  className='text-2xl text-gray-500'
                >
                  ×
                </button>

              </div>

              {/* FORM */}
              <div className='flex flex-col gap-4'>

                <input
                  type='text'
                  name='title'
                  value={projectData.title}
                  onChange={handleChange}
                  placeholder='Enter Project Title'
                  className='border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-300'
                />

                <textarea
                  name='description'
                  value={projectData.description}
                  onChange={handleChange}
                  placeholder='Enter Project Description'
                  className='border p-4 rounded-xl h-[120px] outline-none focus:ring-2 focus:ring-blue-300'
                />

                <select
                  name='status'
                  value={projectData.status}
                  onChange={handleChange}
                  className='border p-4 rounded-xl outline-none'
                >
                  <option>Active</option>
                  <option>Completed</option>
                  <option>Pending</option>
                </select>

                {editId ? (

                  <button
                    onClick={updateProject}
                    className='bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl text-lg'
                  >
                    Update Project
                  </button>

                ) : (

                  <button
                    onClick={addProject}
                    className='bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl text-lg'
                  >
                    Add Project
                  </button>

                )}

              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;