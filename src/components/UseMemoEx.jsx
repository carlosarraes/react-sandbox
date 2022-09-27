import { useState, useRef, useEffect, useMemo } from 'react';

const UseMemoEx = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div className="mx-10">
      <h2>
        Sqrt of {number} is {sqrt}
      </h2>
      <input type="text" className="w-25 border" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={onClick} className="btn btn-sm">
        ReRender
      </button>
      <h1>Renders: {renders.current}</h1>
    </div>
  );
};

function getSqrt(num) {
  return Math.sqrt(num);
}

export default UseMemoEx;
