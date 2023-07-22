import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';
import { UserContext } from './userContext';
import { ICategories, IVideos, IVideosAPI, IVideosSearch } from '../types/types';

export const VideoContext = createContext({} as any);

export const VideoStorage = ({ children }: any) => {  
    const [videos, setVideos] = useState([]);
    const [videosAPI, setVideosAPI] = useState([] as Array<IVideosAPI>);
    const [videoUser, setVideoUser] = useState([]);
    const [videoCat, setVideoCat] = useState([]);
    const [category, setCategory] = useState({} as ICategories);
    const [videoSearch, setVideoSearch] = useState([] as Array<IVideos>);
    const [videoSearchAPI, setVideoSearchAPI] = useState([] as Array<IVideosSearch>);
    const [search, setSearch] = useState('');
    const [channelImages, setChannelImages] = useState([] as Array<string>);
    const [channelImagesSearch, setChannelImagesSearch] = useState([] as Array<string>);
    const { user } = useContext(UserContext);

    const categories = [
        {id: 0, name: 'Tudo'},
        {id: 1, name: 'Infantil'},
        {id: 2, name: 'Automóveis'},
        {id: 10, name: 'Música'},
        {id: 15, name: 'Animais'},
        {id: 17, name: 'Esportes'},
        {id: 20, name: 'Jogos'},
        {id: 22, name: 'Pessoas e Blogs'},
        {id: 23, name: 'Comédia'},
        {id: 24, name: 'Entretenimento'},
        {id: 25, name: 'Notícias e Política'},
        {id: 26, name: 'Tutoriais e Estilo'},
        {id: 28, name: 'Ciência e Tecnologia'}
    ]

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
        getVideosCat(category.id);
    },[category])

    const searchVideos = (search: string) => {
        api.get(`/videos/search?search=${search}`).then(({ data }) => {
            setVideoSearch(data.videos)
        }).catch((error) => {
            console.log('Erro ao buscar os vídeos', error)
        })
    }

    const newVideo = (token: string, title: string, description: string, user_id: string, thumb: string, views: string, time: string, category: string, channel: string, avatar: string, color: string) => {
        api.post('/videos/create-video', {title, description, user_id, thumb, views, time, category, channel, avatar, color}, {headers:{Authorization: token}}).then(() => {
            alert('Vídeo adicionado com sucesso')
        }).catch((error) => {
            console.log('Não foi possível adicionar o vídeo', error);
        })
    }

    return (
        <VideoContext.Provider value={{
            newVideo, videos, videoUser, videoSearch, search, setSearch, searchVideos, category, setCategory, videoCat, videosAPI, setVideosAPI, categories, videoSearchAPI, setVideoSearchAPI, channelImages, channelImagesSearch, setChannelImages, setChannelImagesSearch
        }}>
            {children}
        </VideoContext.Provider>
    )
}