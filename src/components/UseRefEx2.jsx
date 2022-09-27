import { useRef, useState, useEffect } from 'react';

const UseRefEx2 = () => {
  const [name, setName] = useState('');
  const renders = useRef(1);
  const prevName = useRef();
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);
  return (
    <div className="mx-10">
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name: {prevName.current}</h2>
      <input
        type="text"
        className="form-control mb-3 border w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UseRefEx2;
