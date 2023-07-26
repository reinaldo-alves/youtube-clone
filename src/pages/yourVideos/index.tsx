import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Banner, Button, ChannelTitle, Container, UserAvatar } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import { IVideos } from '../../types/types';
import { UserContext } from '../../contexts/userContext';
import Home from '../home';
import { useNavigate } from 'react-router-dom';
import { calcNumColumns } from '../../utilities/functions';

function YourVideos() { 
    const { openMenu } = useContext(MenuContext);
    const { videoUser } = useContext(VideoContext);
    const { user, login } = useContext(UserContext);

    const [numColumns, setNumColumns] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if(containerRef.current) {
                const width = containerRef.current.clientWidth;
                const num = calcNumColumns(width);
                console.log(width, num);
                setNumColumns(num);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[containerRef.current, openMenu])

    if (!login) return (<Home />)

    return (
        <div ref={containerRef} style={{width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
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
            <Container columns={numColumns}>
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