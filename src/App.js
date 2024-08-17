import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSmartphone from './components/AddSmartphone';
import SearchSmart from './components/SearchSmart';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddSmartphone/>}/>
          <Route path="/search" element={<SearchSmart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
