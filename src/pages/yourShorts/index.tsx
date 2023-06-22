import { useContext } from 'react';
import ShortsComponent from "../../components/shortsComponent";
import { Banner, Button, ChannelTitle, Container, UserAvatar } from "./styles";
import { ShortContext } from '../../contexts/shortContext';
import { IShorts } from '../../types/types';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import Home from '../home';
import { MenuContext } from '../../contexts/menuContext';

function YourShorts() { 
    const { shortUser } = useContext(ShortContext);
    const { user, login } = useContext(UserContext);
    const { openMenu } = useContext(MenuContext)

    const navigate = useNavigate();

    if (!login) return (<Home />)

    return (
        <div style={{width:'100%', display: 'flex', flexDirection: 'column'}} >
            <Banner color={user.color}>
                <div style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
                    <UserAvatar avatar={user.avatar} color={user.color}>
                        {user.avatar? '' : user.nome[0] || ''}
                    </UserAvatar>
                    <ChannelTitle>{user.nome}</ChannelTitle>
                </div>
                <div style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
                    <Button onClick={() => navigate('/addvideo')}>Adicionar vídeo</Button>
                    <Button onClick={() => navigate('/addshorts')}>Adicionar shorts</Button>
                </div>
            </Banner>
            <Container openMenu={ openMenu }>
                {shortUser.map((short: IShorts) => (
                    <ShortsComponent thumb={short.thumb} title={short.title} views={short.views} />
                ))}
            </Container>
        </div>
    )
}

export default YourShorts;