import { useContext, useEffect, useState } from 'react';
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
import { getAllVideos, loadVideosAPI } from '../../utilities/functions';

function Home() { 
    const { openMenu } = useContext(MenuContext);
    const { videos, videosAPI, setVideosAPI } = useContext(VideoContext);
    const { shorts } = useContext(ShortContext);

    const [allVideos, setAllVideos] = useState([] as Array<IVideos>);

    const navigate = useNavigate();
    
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=50&regionCode=br&videoCategoryId=0&key=AIzaSyDeTcmAPDBl7cmV-R4OeGGn8xS5Q_FaifE`
    
    const fetchData = async () => {
        const apiVideos = await loadVideosAPI(url);
        setVideosAPI(apiVideos);
    };
    
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        setAllVideos(getAllVideos(videos, videosAPI));
    }, [videos.length, videosAPI.length])

    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} >
            <CategoriesBar />
            <Container shorts={false} openMenu={ openMenu }>
                {allVideos.map((video: IVideos) => (
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
            <TitleShorts>
                <img src={Shorts} alt="shorts"/>
                <span>Shorts</span>
            </TitleShorts>
            <Container shorts={true} openMenu={ openMenu }>
                {shorts.slice(0,6).map((short: IShorts, index: number) => (
                    <ShortsComponent key={index} thumb={short.thumb} title={short.title} views={short.views}/>
                ))}
            </Container>
            <ArrowDownButton onClick={() => navigate('/shorts')}>
                <img src={Arrow} alt="arrowdown" />
            </ArrowDownButton>
        </div>
    )
}

export default Home;