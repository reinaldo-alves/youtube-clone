import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import { UserStorage } from './contexts/userContext';
import { VideoStorage } from './contexts/videoContext';
import AddVideo from './pages/addVideo';
import Categories from './pages/categories';
import History from './pages/history';
import Home from './pages/home';
import Library from './pages/library';
import Login from './pages/login';
import Search from './pages/search';
import SignUp from './pages/signup';
import YourVideos from './pages/yourVideos';

function App() {
  return (
    <UserStorage>
      <VideoStorage>
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
                  <Route path='/yourvideos' element={<YourVideos />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/categories/:category' element={<Categories />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </VideoStorage>
    </UserStorage>
  );
}

export default App;

//1 - Criar tabela de shorts no banco de dados
//2 - Criar menu dropdown a partir do botão de adicionar vídeo
    //Adicionar no menu o botão para criar vídeo e criar shorts
//3 - Criar página de criação de shorts
//4 - Criar página de exibição de shorts 