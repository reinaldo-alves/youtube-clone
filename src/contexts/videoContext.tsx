import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';

export const VideoContext = createContext({} as any);

export const VideoStorage = ({ children }: any) => {  
    // const [login, setLogin] = useState(false);
    // const [user, setUser] = useState({});
    // const [ token ] = useState(localStorage.getItem('token') as string);
    // const [initial, setInitial] = useState('');
    // const [avatar, setAvatar] = useState('');
    // const [videos, setVideos] = useState(initvideos);

    // const getUser = (token: string) => {
    //     api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
    //         setUser(data.user)
    //         setLogin(true)
    //         setInitial(data.user.nome.charAt(0))
    //         setAvatar(data.user.avatar)
    //     }).catch((error) => {
    //         console.log('Usuário não autenticado', error)
    //     })
    // }

    // useEffect(() => {
    //     getUser(token);
    // },[token])

    // const logOut = () => {
    //     localStorage.removeItem('token');
    //     setLogin(false);
    //     setUser({});
    //     setDropdown(false);
    //     setErrorMessage('');
    // }

    // const handleLogin = (email: string, password: string) => {
    //     api.post('/user/sign-in', {email, password}).then(({ data }) => {
    //         setLogin(true);
    //         localStorage.setItem('token', data.token);
    //         setToken(data.token);
    //         getUser(data.token);
    //         setErrorMessage(data.message);
    //     }).catch((error) => {
    //         console.log('Não foi possível fazer o login', error);
    //     })
    // }

    const newVideo = (token: string, title: string, description: string, user_id: string, thumb: string, views: string, time: string, category: string, channel: string, avatar: string) => {
        api.post('/videos/create-video', {title, description, user_id, thumb, views, time, category, channel, avatar}, {headers:{Authorization: token}}).then(() => {
            alert('Vídeo adicionado com sucesso')
        }).catch((error) => {
            console.log('Não foi possível adicionar o vídeo', error);
        })
    }

    return (
        <VideoContext.Provider value={{
            newVideo
        }}>
            {children}
        </VideoContext.Provider>
    )
}