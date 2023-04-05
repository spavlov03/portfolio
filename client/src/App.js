import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Test from './components/Test';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='test' element={<Test/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
