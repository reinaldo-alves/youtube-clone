import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';
import { UserContext } from './userContext';

export const ShortContext = createContext({} as any);

export const ShortStorage = ({ children }: any) => {  
    const [shorts, setShorts] = useState([]);
    const [shortUser, setShortUser] = useState([]);
    const [shortSearch, setShortSearch] = useState([]);
    const [search, setSearch] = useState('');
    const { user } = useContext(UserContext);

    const getShorts = (user_id: string) => {
        api.get(`/shorts/get-shorts?user_id=${user_id}`).then(({ data }) => {
            setShortUser(data.shorts)
        }).catch((error) => {
            console.log('Erro ao carregar os shorts do usuário', error)
        })
    }

    useEffect(() => {
        getShorts(user.id);
    },[shortUser])

    const getAllShorts = () => {
        api.get('/shorts/get-all-shorts').then(({ data }) => {
            setShorts(data.shorts)
        }).catch((error) => {
            console.log('Erro ao carregar os shorts', error)
        })
    }

    useEffect(() => {
        getAllShorts();
    },[shorts])

    const searchShorts = (search: string) => {
        api.get(`/shorts/search?search=${search}`).then(({ data }) => {
            setShortSearch(data.shorts)
        }).catch((error) => {
            console.log('Erro ao buscar os vídeos', error)
        })
    }

    const newShort = (token: string, title: string, user_id: string, thumb: string, views: string) => {
        api.post('/shorts/create-shorts', {title, user_id, thumb, views}, {headers:{Authorization: token}}).then(() => {
            alert('Shorts adicionado com sucesso')
        }).catch((error) => {
            console.log('Não foi possível adicionar o shorts', error);
        })
    }

    return (
        <ShortContext.Provider value={{
            newShort, shorts, shortUser, shortSearch, search, setSearch, searchShorts 
        }}>
            {children}
        </ShortContext.Provider>
    )
}