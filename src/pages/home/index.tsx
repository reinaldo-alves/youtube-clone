import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container, TitleShorts, ArrowDownButton } from "./styles";
import ShortsComponent from '../../components/shortsComponent';
import Arrow from '../../assets/arrow-down.png';
import Shorts from '../../assets/shorts-color.png';
import { VideoContext } from '../../contexts/videoContext';
import { ShortContext } from '../../contexts/shortContext';
import { useNavigate } from 'react-router-dom';
import { IShorts, IVideos } from '../../types/types';
import CategoriesBar from '../../components/categoriesBar';

function Home() { 
    const { openMenu } = useContext(MenuContext);
    const { videos } = useContext(VideoContext);
    const { shorts } = useContext(ShortContext);
    const navigate = useNavigate();
    
    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} >
            <CategoriesBar />
            <Container shorts={false} openMenu={ openMenu }>
                {videos.map((video: IVideos) => (
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
            <TitleShorts>
                <img src={Shorts} alt="shorts"/>
                <span>Shorts</span>
            </TitleShorts>
            <Container shorts={true} openMenu={ openMenu }>
                {shorts.slice(0,6).map((short: IShorts) => (
                    <ShortsComponent thumb={short.thumb} title={short.title} views={short.views}/>
                ))}
            </Container>
            <ArrowDownButton onClick={() => navigate('/shorts')}>
                <img src={Arrow} alt="arrowdown" />
            </ArrowDownButton>
        </div>
    )
}

export default Home;