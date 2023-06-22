import { useContext, useState, useEffect } from 'react';
import { Container, ContainerShorts, TextNone, TitleShorts } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import VideoSearchComponent from '../../components/videoSearchComponent';
import { ShortContext } from '../../contexts/shortContext';
import Shorts from '../../assets/shorts-color.png'
import ShortsComponent from '../../components/shortsComponent';
import { IShorts, IVideos } from '../../types/types';
import { getAllSearchVideos } from '../../utilities/functions';
import { MenuContext } from '../../contexts/menuContext';

function Search() { 
    const { videoSearch, videoSearchAPI } = useContext(VideoContext);
    const { shortSearch } = useContext(ShortContext);
    const { openMenu } = useContext(MenuContext)

    const [allVideoSearch, setAllVideoSearch] = useState([] as Array<IVideos>)

    useEffect(() => {
        setAllVideoSearch(getAllSearchVideos(videoSearch, videoSearchAPI));
    }, [videoSearch, videoSearchAPI])

    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', gap:'20px', padding:'24px'}} >
            {allVideoSearch.length===0 && shortSearch.length===0?
                <TextNone>Nenhum vídeo ou shorts encontrado</TextNone>
            :
                allVideoSearch.length===0? 
                    ''
                :
                    <Container short={shortSearch.length}>
                        {allVideoSearch.map((video: IVideos) => (
                            <VideoSearchComponent 
                                thumb={video.thumb}
                                title={video.title}
                                views={video.views}
                                time={video.time}
                                avatar={video.avatar}
                                color={video.color}
                                channel={video.channel}
                                description={video.description}
                                key={video.video_id}
                            />
                        ))}
                    </Container>
            }
            {allVideoSearch.length===0 && shortSearch.length===0?
                ''
            :
                shortSearch.length===0? 
                    ''
                :
                    <>
                        <TitleShorts video={videoSearch.length}>
                            <img src={Shorts} alt="shorts"/>
                            <span>Shorts</span>
                        </TitleShorts>
                        <ContainerShorts openMenu={ openMenu }>
                            {shortSearch.map((short: IShorts) => (
                                <ShortsComponent thumb={short.thumb} title={short.title} views={short.views} />
                            ))}
                        </ContainerShorts>
                    </>
            }
        </div>
    )
}

export default Search;