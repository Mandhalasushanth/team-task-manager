import { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { AppContext } from '../context/AppContext';

function Dashboard() {

  const { tasks, projects } = useContext(AppContext);

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed'
  );

  const pendingTasks = tasks.filter(
    (task) => task.status === 'Pending'
  );

  return (
    <div className='flex bg-[#f5f7fb] min-h-screen'>

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className='flex-1 p-10'>

        {/* Header */}
        <div className='mb-10'>

          <h1 className='text-5xl font-bold text-gray-800'>
            Dashboard
          </h1>

          <p className='text-gray-500 mt-2'>
            Overview of projects and tasks
          </p>

        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>

          <div className='bg-white p-6 rounded-3xl shadow-lg'>
            <h2 className='text-gray-500 text-lg'>
              Total Projects
            </h2>

            <p className='text-5xl font-bold text-blue-600 mt-4'>
              {projects.length}
            </p>
          </div>

          <div className='bg-white p-6 rounded-3xl shadow-lg'>
            <h2 className='text-gray-500 text-lg'>
              Total Tasks
            </h2>

            <p className='text-5xl font-bold text-purple-600 mt-4'>
              {tasks.length}
            </p>
          </div>

          <div className='bg-white p-6 rounded-3xl shadow-lg'>
            <h2 className='text-gray-500 text-lg'>
              Completed
            </h2>

            <p className='text-5xl font-bold text-green-600 mt-4'>
              {completedTasks.length}
            </p>
          </div>

          <div className='bg-white p-6 rounded-3xl shadow-lg'>
            <h2 className='text-gray-500 text-lg'>
              Pending
            </h2>

            <p className='text-5xl font-bold text-red-500 mt-4'>
              {pendingTasks.length}
            </p>
          </div>

        </div>

        {/* Recent Tasks */}
        <div className='bg-white p-8 rounded-3xl shadow-lg'>

          <div className='flex justify-between items-center mb-6'>

            <h2 className='text-3xl font-bold'>
              Recent Tasks
            </h2>

          </div>

          <table className='w-full'>

            <thead>
              <tr className='border-b text-gray-600'>
                <th className='text-left p-4'>Task</th>
                <th className='text-left p-4'>Priority</th>
                <th className='text-left p-4'>Status</th>
                <th className='text-left p-4'>Due Date</th>
              </tr>
            </thead>

            <tbody>

              {tasks.slice(0, 5).map((task) => (

                <tr
                  key={task.id}
                  className='border-b hover:bg-gray-50 transition'
                >

                  <td className='p-4 font-medium'>
                    {task.title}
                  </td>

                  <td className='p-4'>
                    {task.priority}
                  </td>

                  <td className='p-4'>
                    {task.status}
                  </td>

                  <td className='p-4'>
                    {task.dueDate}
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;