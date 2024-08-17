import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSmartphone from './components/AddSmartphone';
import SearchSmart from './components/SearchSmart';
import DeleteSmart from './components/DeleteSmart';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddSmartphone/>}/>
          <Route path="/search" element={<SearchSmart/>}/>
          <Route path="/delete" element={<DeleteSmart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
