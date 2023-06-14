import { useContext } from 'react';
import ShortsComponent from "../../components/shortsComponent";
import { Banner, Button, Container, UserAvatar } from "./styles";
import { ShortContext } from '../../contexts/shortContext';
import { IShorts } from '../../types/types';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import Home from '../home';

function YourShorts() { 
    const { shortUser } = useContext(ShortContext);
    const { user, login } = useContext(UserContext);

    const navigate = useNavigate();

    if (!login) return (<Home />)

    return (
        <div style={{width:'100%', display: 'flex', flexDirection: 'column'}} >
            <Banner color={user.color}>
                <UserAvatar avatar={user.avatar} color={user.color}>
                    {user.avatar? '' : user.nome[0] || ''}
                </UserAvatar>
                <h1>{user.nome}</h1>
                <Button onClick={() => navigate('/addvideo')}>Adicionar vídeo</Button>
                <Button onClick={() => navigate('/addshorts')}>Adicionar shorts</Button>
            </Banner>
            <Container>
                {shortUser.map((short: IShorts) => (
                    <ShortsComponent thumb={short.thumb} title={short.title} views={short.views} />
                ))}
            </Container>
        </div>
    )
}

export default YourShorts;