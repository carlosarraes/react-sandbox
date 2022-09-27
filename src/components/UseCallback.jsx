import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }) => {
  console.log('button rendered');
  return (
    <div>
      <button className="btn btn-sm" onClick={addTask}>
        Click
      </button>
    </div>
  );
});

export default UseCallback;
