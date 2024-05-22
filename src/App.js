import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App12 from './component/sampledash/maindash';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App12/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
