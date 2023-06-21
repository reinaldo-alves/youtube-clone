import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import { IVideos, IVideosAPI } from '../../types/types';
import CategoriesBar from '../../components/categoriesBar';
import { getAllVideos, loadVideosAPI } from '../../utilities/functions';

function Categories() { 
    const { openMenu } = useContext(MenuContext);
    const { videoCat, category } = useContext(VideoContext);

    const [allCatVideos, setAllCatVideos] = useState([] as Array<IVideos>);
    const [videosCatAPI, setVideosCatAPI] = useState([] as Array<IVideosAPI>);

    const fetchData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=50&regionCode=br&videoCategoryId=${category.id}&key=AIzaSyDeTcmAPDBl7cmV-R4OeGGn8xS5Q_FaifE`
        const apiVideos = await loadVideosAPI(url);
        setVideosCatAPI(apiVideos);
    };
    
    useEffect(() => {
        fetchData();
    }, [category])

    useEffect(() => {
        if (category.name === 'Tudo') {
            setAllCatVideos(getAllVideos([], videosCatAPI));
        } else {
            setAllCatVideos(getAllVideos(videoCat, videosCatAPI));
        }
    }, [videoCat, videosCatAPI])

    return (
        <div style={{width:'100%'}} >
            <CategoriesBar />
            <Container shorts={false} openMenu={ openMenu }>
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