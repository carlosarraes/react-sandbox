import Todo from './Todo';
import { useState } from 'react';

const UseRefEx3 = () => {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      {showTodo && <Todo />}
      <button className="btn btn-sm mt-10" onClick={() => setShowTodo((prevState) => !prevState)}>
        Click
      </button>
    </div>
  );
};

export default UseRefEx3;
