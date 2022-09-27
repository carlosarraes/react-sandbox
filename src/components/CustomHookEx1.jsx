import useFetch from '../hooks/useFetch';

const CustomHookEx1 = () => {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', {});

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default CustomHookEx1;
