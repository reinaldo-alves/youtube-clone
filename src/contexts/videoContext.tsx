import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';
import { UserContext } from './userContext';

export const VideoContext = createContext({} as any);

export const VideoStorage = ({ children }: any) => {  
    const [videos, setVideos] = useState([]);
    const [videoUser, setVideoUser] = useState([]);
    const [videoCat, setVideoCat] = useState([]);
    const [category, setCategory] = useState('');
    const [videoSearch, setVideoSearch] = useState([]);
    const [search, setSearch] = useState('');
    const { user } = useContext(UserContext);

    const getVideos = (user_id: string) => {
        api.get(`/videos/get-videos?user_id=${user_id}`).then(({ data }) => {
            setVideoUser(data.videos)
        }).catch((error) => {
            console.log('Erro ao carregar os vídeos do usuário', error)
        })
    }

    useEffect(() => {
        getVideos(user.id);
    },[videoUser])

    const getAllVideos = () => {
        api.get('/videos/get-all-videos').then(({ data }) => {
            setVideos(data.videos)
        }).catch((error) => {
            console.log('Erro ao carregar os vídeos', error)
        })
    }

    useEffect(() => {
        getAllVideos();
    },[videos])

    const getVideosCat = (category: string) => {
        api.get(`/videos/get-videos-cat/${category}`).then(({ data }) => {
            setVideoCat(data.videos)
        }).catch((error) => {
            console.log('Erro ao carregar os vídeos', error)
        })
    }

    useEffect(() => {
        getVideosCat(category);
    },[category])

    const searchVideos = (search: string) => {
        api.get(`/videos/search?search=${search}`).then(({ data }) => {
            setVideoSearch(data.videos)
        }).catch((error) => {
            console.log('Erro ao buscar os vídeos', error)
        })
    }

    const newVideo = (token: string, title: string, description: string, user_id: string, thumb: string, views: string, time: string, category: string, channel: string, avatar: string) => {
        api.post('/videos/create-video', {title, description, user_id, thumb, views, time, category, channel, avatar}, {headers:{Authorization: token}}).then(() => {
            alert('Vídeo adicionado com sucesso')
        }).catch((error) => {
            console.log('Não foi possível adicionar o vídeo', error);
        })
    }

    return (
        <VideoContext.Provider value={{
            newVideo, videos, videoUser, videoSearch, search, setSearch, searchVideos, category, setCategory, videoCat 
        }}>
            {children}
        </VideoContext.Provider>
    )
}