import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Todo from './components/Todo';
import './index.css';
import PostTrad from './components/PostTrad';
import PostTanQuery from './components/PostTanQuery';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index={true} path='/' element={<Home />} />
        <Route path='/posts' element={<PostTrad />} />
        <Route path='/rq-posts' element={<PostTanQuery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
