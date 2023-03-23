import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import { ShortStorage } from './contexts/shortContext';
import { UserStorage } from './contexts/userContext';
import { VideoStorage } from './contexts/videoContext';
import AddShorts from './pages/addShorts';
import AddVideo from './pages/addVideo';
import Categories from './pages/categories';
import History from './pages/history';
import Home from './pages/home';
import Library from './pages/library';
import Login from './pages/login';
import Search from './pages/search';
import Shorts from './pages/Shorts';
import SignUp from './pages/signup';
import YourShorts from './pages/yourShorts';
import YourVideos from './pages/yourVideos';

function App() {
  return (
    <UserStorage>
      <VideoStorage>
        <ShortStorage>
          <BrowserRouter>
            <div className="App">
              <Header />
              <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/library' element={<Library />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/addvideo' element={<AddVideo />} />
                    <Route path='/addshorts' element={<AddShorts />} />
                    <Route path='/yourvideos' element={<YourVideos />} />
                    <Route path='/yourshorts' element={<YourShorts />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/shorts' element={<Shorts />} />
                    <Route path='/categories/:category' element={<Categories />} />
                  </Routes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </ShortStorage>
      </VideoStorage>
    </UserStorage>
  );
}

export default App;