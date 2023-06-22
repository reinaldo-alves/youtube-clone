import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Banner, Button, ChannelTitle, Container, UserAvatar } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import { IVideos } from '../../types/types';
import { UserContext } from '../../contexts/userContext';
import Home from '../home';
import { useNavigate } from 'react-router-dom';

function YourVideos() { 
    const { openMenu } = useContext(MenuContext);
    const { videoUser } = useContext(VideoContext);
    const { user, login } = useContext(UserContext);

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
            <Container>
                {videoUser.map((video: IVideos) => (
                    <VideoComponent 
                        thumb={video.thumb}
                        avatar={video.avatar}
                        title={video.title}
                        channel={video.channel}
                        views={video.views}
                        time={video.time}
                        color={video.color}
                        key={video.video_id}
                    />
                ))}
            </Container>
        </div>
    )
}

export default YourVideos;