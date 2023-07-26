import { useContext, useEffect, useState, useRef, useLayoutEffect } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import { IVideos, IVideosAPI } from '../../types/types';
import CategoriesBar from '../../components/categoriesBar';
import { calcNumColumns, getAllVideos, loadChannelImages, loadVideosAPI } from '../../utilities/functions';

function Categories() { 
    const { openMenu } = useContext(MenuContext);
    const { videoCat, category, channelImages, setChannelImages } = useContext(VideoContext);

    const [allCatVideos, setAllCatVideos] = useState([] as Array<IVideos>);
    const [videosCatAPI, setVideosCatAPI] = useState([] as Array<IVideosAPI>);
    const [numColumns, setNumColumns] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    const fetchData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=50&regionCode=br&videoCategoryId=${category.id}&key=AIzaSyDeTcmAPDBl7cmV-R4OeGGn8xS5Q_FaifE`
        const apiVideos = await loadVideosAPI(url);
        const images = await loadChannelImages(apiVideos);
        setChannelImages(images);
        setVideosCatAPI(apiVideos);
    };
    
    useEffect(() => {
        fetchData();
    }, [category])

    useEffect(() => {
        if (category.name === 'Tudo') {
            setAllCatVideos(getAllVideos([], videosCatAPI, channelImages));
        } else {
            setAllCatVideos(getAllVideos(videoCat, videosCatAPI, channelImages));
        }
    }, [videoCat, videosCatAPI])

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

    return (
        <div ref={containerRef} style={{width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <CategoriesBar />
            <Container columns={numColumns}>
                {allCatVideos.map((video: IVideos) => (
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

export default Categories;