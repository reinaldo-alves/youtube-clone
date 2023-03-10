import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import History from './pages/history';
import Home from './pages/home';
import Library from './pages/library';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu />
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/library' element={<Library />} />
              <Route path='/history' element={<History />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
