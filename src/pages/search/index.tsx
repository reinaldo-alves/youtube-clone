import { useContext } from 'react';
import { Container, ContainerShorts, TextNone, TitleShorts } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import VideoSearchComponent from '../../components/videoSearchComponent';
import { ShortContext } from '../../contexts/shortContext';
import Shorts from '../../assets/shorts-color.png'
import ShortsComponent from '../../components/shortsComponent';

function Search() { 
    const { videoSearch } = useContext(VideoContext);
    const { shortSearch } = useContext(ShortContext);

    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', padding:'24px'}} >
            {videoSearch.length===0 && shortSearch.length===0?
                <TextNone>Nenhum vídeo ou shorts encontrado</TextNone>
            :
                videoSearch.length===0? 
                    ''
                :
                    <Container short={shortSearch.length}>
                        {videoSearch.map((video: Array<Object>) => (
                            <VideoSearchComponent video={video} />
                        ))}
                    </Container>
            }
            {videoSearch.length===0 && shortSearch.length===0?
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
                        <ContainerShorts>
                            {shortSearch.map((short: Array<Object>) => (
                                <ShortsComponent short={short} />
                            ))}
                        </ContainerShorts>
                    </>
            }
        </div>
    )
}

export default Search;