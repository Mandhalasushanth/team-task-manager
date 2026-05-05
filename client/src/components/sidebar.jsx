import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='w-[260px] min-h-screen bg-white shadow-xl p-8'>

      <h1 className='text-4xl font-bold text-blue-600 mb-12'>
        TaskFlow
      </h1>

      <div className='flex flex-col gap-5'>

        <Link
          to='/dashboard'
          className='p-4 rounded-2xl hover:bg-blue-50 transition font-medium'
        >
          Dashboard
        </Link>

        <Link
          to='/projects'
          className='p-4 rounded-2xl hover:bg-blue-50 transition font-medium'
        >
          Projects
        </Link>

        <Link
          to='/tasks'
          className='p-4 rounded-2xl bg-blue-100 text-blue-700 font-semibold'
        >
          Tasks
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;