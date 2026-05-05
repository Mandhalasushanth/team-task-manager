function TaskModal({ closeModal, addTask }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      name: e.target.name.value,
      priority: e.target.priority.value,
      status: e.target.status.value,
      dueDate: e.target.dueDate.value,
    };

    addTask(task);
    closeModal();
  };

  return (
    <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>

      <div className='bg-white p-8 rounded-3xl w-[500px]'>

        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-3xl font-bold'>Create Task</h2>

          <button onClick={closeModal}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <input
            name='name'
            placeholder='Task Name'
            className='w-full p-3 border rounded-xl mb-4'
          />

          <select
            name='priority'
            className='w-full p-3 border rounded-xl mb-4'
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select
            name='status'
            className='w-full p-3 border rounded-xl mb-4'
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <input
            type='date'
            name='dueDate'
            className='w-full p-3 border rounded-xl mb-4'
          />

          <button className='bg-blue-600 text-white px-6 py-3 rounded-xl w-full'>
            Add Task
          </button>

        </form>
      </div>
    </div>
  );
}

export default TaskModal;