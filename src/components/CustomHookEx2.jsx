import useLocalStorage from '../hooks/useLocalStorage';

const CustomHookEx2 = () => {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-25">
        <div className="mb-3">
          <label className="form-label block">Task</label>
          <input type="text" className="border w-25" value={task} onChange={(e) => setTask(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-sm">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((taskm) => (
        <h1 key={taskm.date}>{taskm.task}</h1>
      ))}
    </>
  );
};

export default CustomHookEx2;
