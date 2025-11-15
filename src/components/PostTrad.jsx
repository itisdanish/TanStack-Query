import { useEffect, useState } from 'react';

const PostTrad = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      const json = await response.json();
      setPosts(json);
    } catch (err) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-[70vh]'>
        <h1 className='text-3xl font-bold text-indigo-600'>
          Page is loading...
        </h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex items-center justify-center h-[70vh]'>
        <h1 className='text-3xl font-bold text-red-600'>
          Something went wrong...
        </h1>
      </div>
    );
  }
  return (
    <>
      <h1 className='text-3xl font-bold text-center my-6 text-indigo-600'>
        Posts
      </h1>

      <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-4'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='bg-white shadow-lg rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-all duration-300'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              {post.title}
            </h3>

            <p className='text-gray-600 leading-relaxed'>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostTrad;
