import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

import Task from './components/Task';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='create' element={<Create/>}></Route>
      <Route path='update/:id' element={<Update/>}></Route>
      <Route path='task/:id' element={<Task/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
