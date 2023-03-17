import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';
import { MenuContext } from './menuContext';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [initial, setInitial] = useState('');
    const [errorMessage, setErrorMessage] = useState(' ');
    const { setDropdown } = useContext(MenuContext);


    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user)
            setLogin(true)
            setInitial(data.user.nome.charAt(0))
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }

    useEffect(() => {
        getUser(token);
    },[token])

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
        setDropdown(false);
        setErrorMessage('');
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            setErrorMessage(data.message);
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        })
    }

    const newUser = (name: string, email: string, password: string, avatar: string) => {
        api.post('/user/sign-up', {name, email, password, avatar}).then(() => {
            alert('Usuário cadastrado com sucesso')
        }).catch((error) => {
            console.log('Não foi possível fazer o cadastro', error);
        })
    }

    return (
        <UserContext.Provider value={{
            login, user, handleLogin, logOut, initial, errorMessage, newUser
        }}>
            {children}
        </UserContext.Provider>
    )
}