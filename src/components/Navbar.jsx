import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='text-2xl font-bold text-gray-800'>MyApp</div>

          {/* Menu */}
          <ul className='flex space-x-6 text-gray-700 font-medium'>
            <li>
              <Link to='/' className='hover:text-indigo-600 transition-colors'>
                Home
              </Link>
            </li>

            <li>
              <Link
                to='/posts'
                className='hover:text-indigo-600 transition-colors'
              >
                Traditional Posts
              </Link>
            </li>

            <li>
              <Link
                to='/rq-posts'
                className='hover:text-indigo-600 transition-colors'
              >
                RQ Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
