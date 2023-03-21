import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { Container } from "./styles";
import { VideoContext } from '../../contexts/videoContext';
import VideoSearchComponent from '../../components/videoSearchComponent';

function Search() { 
    const { openMenu } = useContext(MenuContext);
    const { videoSearch } = useContext(VideoContext);

    return (
        <div style={{width:'100%', display:'flex', justifyContent:'center', padding:'24px'}} >
            <Container shorts={false} openMenu={ openMenu }>
                {videoSearch.map((video: Array<Object>) => (
                    <VideoSearchComponent video={video} />
                ))}
            </Container>
        </div>
    )
}

export default Search;