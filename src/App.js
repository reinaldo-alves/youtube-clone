import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import { UserStorage } from './contexts/userContext';
import History from './pages/history';
import Home from './pages/home';
import Library from './pages/library';
import Login from './pages/login';
import SignUp from './pages/signup';

function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/library' element={<Library />} />
                <Route path='/history' element={<History />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;

//5 - Criar tela e integração para cadastro de vídeo (acesso a partir do drop down)
//6 - Implementação de pesquisa (usando valor digitado na barra de pesquisa)