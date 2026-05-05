import { createContext, useState } from 'react';

export const AppContext = createContext();

function AppProvider({ children }) {

  // TASKS
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Dashboard UI Design',
      priority: 'High',
      status: 'Pending',
      dueDate: '2026-08-20',
    },
  ]);

  // PROJECTS
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI Team Collaboration',
      description: 'Manage AI project tasks',
      status: 'Active',
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        projects,
        setProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;