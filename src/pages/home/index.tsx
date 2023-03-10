import { useContext } from 'react';
import { OpenMenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container, CategoriesContainer, Categories } from "./styles";
import ShortsComponent from '../../components/shortsComponent';
import Arrow from '../../assets/arrow-down.png'
import Shorts from '../../assets/Shorts.png'

function Home() { 
    const { openMenu } = useContext(OpenMenuContext);
    
    return (
        <div style={{display:'flex', flexDirection:'column'}} >
            <CategoriesContainer>
                <Categories>Tudo</Categories>
                <Categories>Submarinos</Categories>
                <Categories>Notícias</Categories>
                <Categories>Ferramentas</Categories>
                <Categories>Músicas</Categories>
                <Categories>Mixes</Categories>
                <Categories>Engenharia Elétrica</Categories>
                <Categories>Ao vivo</Categories>
                <Categories>Jogos</Categories>
                <Categories>Voo</Categories>
                <Categories>Copa do Mundo</Categories>
            </CategoriesContainer>
            <Container shorts={false} openMenu={ openMenu }>
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
            </Container>
            <div style={{width:'100%', borderTop: '4px solid #d4d4d4', padding:'30px 0 6px 24px', display:'flex'}}>
                <img style={{width:'25px', height:'25px', marginLeft:'10px'}} src={Shorts} />
                <span style={{marginLeft:'10px', fontSize:'19px', fontWeight:'600'}} >Shorts</span>
            </div>
            <Container shorts={true} openMenu={ openMenu }>
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
            </Container>
            <div style={{width:'100%', textAlign:'center', borderBottom: '4px solid #d4d4d4'}}>
                <img style={{width:'25px', height:'25px'}} src={Arrow} />
            </div>
        </div>
    )
}

export default Home;