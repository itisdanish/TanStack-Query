const Home = () => {
  return (
    <div className='flex items-center justify-center h-[90vh] bg-gray-900'>
      <div className='bg-white shadow-xl rounded-2xl p-10 w-80 text-center border border-gray-100'>
        {/* TanStack Logo */}
        <img
          src='https://tanstack.com/images/logos/logo-color-600.png'
          alt='TanStack Logo'
          className='w-20 mx-auto mb-4'
        />

        <h1 className='text-2xl font-bold text-gray-800'>
          TanStack Query Learning
        </h1>

        <p className='text-gray-500 mt-2 text-sm'>
          This project is focused on TanStack Query concepts.
        </p>
      </div>
    </div>
  );
};

export default Home;
