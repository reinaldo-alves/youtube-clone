import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import { UserStorage } from './contexts/userContext';
import History from './pages/history';
import Home from './pages/home';
import Library from './pages/library';
import Login from './pages/login';

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
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;

//3 - Implementar sozinho um drop down menu a partir do ícone de usuário (inserindo o botão sair dentro)
//4 - Criar tela e integração para cadastro de usuário (acesso a partir da tela de login)
//5 - Criar tela e integração para cadastro de vídeo (acesso a partir do drop down)
//6 - Implementação de pesquisa (usando valor digitado na barra de pesquisa)