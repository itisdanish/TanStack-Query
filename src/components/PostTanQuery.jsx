import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PostTanQuery = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['post'],
    queryFn: () => {
      return axios.get('http://localhost:5000/api/posts');
    },
    // staleTime: 5000,
    // refetchInterval: 1000,
  });

  console.log({ isLoading, isFetching });
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
        <h1 className='text-3xl font-bold text-red-600'>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center my-6 text-indigo-600'>
        TanStack Query Posts
      </h1>

      <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-4'>
        {data?.data?.map((post) => (
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

export default PostTanQuery;
