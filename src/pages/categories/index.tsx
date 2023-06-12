import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import { IVideos } from '../../types/types';

function Categories() { 
    const { openMenu } = useContext(MenuContext);
    const { videoCat } = useContext(VideoContext);

    return (
        <div style={{width:'100%'}} >
            <Container shorts={false} openMenu={ openMenu }>
                {videoCat.map((video: IVideos) => (
                    <VideoComponent 
                        thumb={video.thumb}
                        avatar={video.avatar}
                        title={video.title}
                        channel={video.channel}
                        views={video.views}
                        time={video.time}
                        color={video.color}
                    />
                ))}
            </Container>
        </div>
    )
}

export default Categories;