import { useRef } from 'react';

const UseRefEx1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    paraRef.current.innerText = 'Hello';
  };

  return (
    <div className="mx-5">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <label className="input-group">
          <span>Email</span>
          <input type="text" ref={inputRef} className="input input-bordered w-full focus:outline-none" />
        </label>
        <button className="btn btn-info btn-sm" type="submit">
          Submit
        </button>
        <p ref={paraRef}>test</p>
      </form>
    </div>
  );
};

export default UseRefEx1;
