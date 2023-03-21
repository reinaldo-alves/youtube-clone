import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { VideoContext } from '../../contexts/videoContext';

function YourVideos() { 
    const { openMenu } = useContext(MenuContext);
    const { videoUser } = useContext(VideoContext);

    return (
        <div style={{width:'100%'}} >
            <Container shorts={false} openMenu={ openMenu }>
                {videoUser.map((video: Array<Object>) => (
                    <VideoComponent video={video} />
                ))}
            </Container>
        </div>
    )
}

export default YourVideos;