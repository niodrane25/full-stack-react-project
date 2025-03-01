import React, { useEffect, useState } from 'react';
import CreatePost from './createpost';
import CreateProfile from './createProfile';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  return (
    <main>
      {tasks.map((task) => (
        <span className="task" key={task.id}>
          {task.description}
        </span>
      ))}
      <CreatePost />
      <CreateProfile />
    </main>
  );
};

export default App;
