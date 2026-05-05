import { useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { AppContext } from '../context/AppContext';

function Tasks() {

  // GLOBAL CONTEXT
  const { tasks, setTasks } = useContext(AppContext);

  // MODAL
  const [showModal, setShowModal] = useState(false);

  // EDIT ID
  const [editId, setEditId] = useState(null);

  // FORM DATA
  const [taskData, setTaskData] = useState({
    title: '',
    priority: 'Medium',
    status: 'Pending',
    dueDate: '',
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD TASK
  const addTask = () => {

    if (!taskData.title || !taskData.dueDate) {
      alert('Please fill all fields');
      return;
    }

    const newTask = {
      id: Date.now(),
      ...taskData,
    };

    setTasks([...tasks, newTask]);

    resetForm();
  };

  // DELETE TASK
  const deleteTask = (id) => {

    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(filteredTasks);
  };

  // EDIT TASK
  const editTask = (task) => {

    setTaskData({
      title: task.title,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
    });

    setEditId(task.id);

    setShowModal(true);
  };

  // UPDATE TASK
  const updateTask = () => {

    const updatedTasks = tasks.map((task) =>

      task.id === editId
        ? {
            ...taskData,
            id: editId,
          }
        : task
    );

    setTasks(updatedTasks);

    resetForm();
  };

  // RESET FORM
  const resetForm = () => {

    setTaskData({
      title: '',
      priority: 'Medium',
      status: 'Pending',
      dueDate: '',
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
              Tasks
            </h1>

            <p className='text-gray-500 mt-2'>
              Manage team tasks efficiently
            </p>

          </div>

          <button
            onClick={() => setShowModal(true)}
            className='bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl shadow-md'
          >
            Create Task
          </button>

        </div>

        {/* TASK TABLE */}
        <div className='bg-white rounded-3xl shadow-lg p-8 overflow-x-auto'>

          <table className='w-full border-collapse'>

            <thead>

              <tr className='border-b text-gray-700'>

                <th className='text-left p-4 text-lg'>
                  Task
                </th>

                <th className='text-left p-4 text-lg'>
                  Priority
                </th>

                <th className='text-left p-4 text-lg'>
                  Status
                </th>

                <th className='text-left p-4 text-lg'>
                  Due Date
                </th>

                <th className='text-left p-4 text-lg'>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {tasks.length > 0 ? (

                tasks.map((task) => (

                  <tr
                    key={task.id}
                    className='border-b hover:bg-gray-50 transition'
                  >

                    <td className='p-4 font-medium text-gray-800'>
                      {task.title}
                    </td>

                    <td className='p-4'>

                      <span
                        className={`px-4 py-2 rounded-xl text-sm font-medium

                        ${
                          task.priority === 'High'
                            ? 'bg-red-100 text-red-600'
                            : task.priority === 'Medium'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-green-100 text-green-600'
                        }
                        `}
                      >
                        {task.priority}
                      </span>

                    </td>

                    <td className='p-4'>

                      <span
                        className={`px-4 py-2 rounded-xl text-sm font-medium

                        ${
                          task.status === 'Completed'
                            ? 'bg-green-100 text-green-600'
                            : task.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-yellow-100 text-yellow-600'
                        }
                        `}
                      >
                        {task.status}
                      </span>

                    </td>

                    <td className='p-4 text-gray-600'>
                      {task.dueDate}
                    </td>

                    <td className='p-4 flex gap-3'>

                      <button
                        onClick={() => editTask(task)}
                        className='bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-xl'
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteTask(task.id)}
                        className='bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-xl'
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))

              ) : (

                <tr>

                  <td
                    colSpan='5'
                    className='text-center p-10 text-gray-400'
                  >
                    No Tasks Available
                  </td>

                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* MODAL */}
        {showModal && (

          <div className='fixed inset-0 bg-black/40 flex justify-center items-center z-50'>

            <div className='bg-white p-8 rounded-3xl w-[500px] shadow-2xl'>

              {/* MODAL HEADER */}
              <div className='flex justify-between items-center mb-6'>

                <h2 className='text-3xl font-bold'>

                  {editId ? 'Edit Task' : 'Create Task'}

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
                  value={taskData.title}
                  onChange={handleChange}
                  placeholder='Enter Task Title'
                  className='border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-300'
                />

                <select
                  name='priority'
                  value={taskData.priority}
                  onChange={handleChange}
                  className='border p-4 rounded-xl outline-none'
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>

                <select
                  name='status'
                  value={taskData.status}
                  onChange={handleChange}
                  className='border p-4 rounded-xl outline-none'
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>

                <input
                  type='date'
                  name='dueDate'
                  value={taskData.dueDate}
                  onChange={handleChange}
                  className='border p-4 rounded-xl outline-none'
                />

                {editId ? (

                  <button
                    onClick={updateTask}
                    className='bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl text-lg'
                  >
                    Update Task
                  </button>

                ) : (

                  <button
                    onClick={addTask}
                    className='bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl text-lg'
                  >
                    Add Task
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

export default Tasks;