import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <Navigation/> */}
      <Main/>
      {/* <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
