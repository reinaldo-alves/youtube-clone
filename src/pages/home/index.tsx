import { useContext } from 'react';
import { OpenMenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container, CategoriesContainer, Categories, TitleShorts, ArrowDownButton } from "./styles";
import ShortsComponent from '../../components/shortsComponent';
import Arrow from '../../assets/arrow-down.png'
import Shorts from '../../assets/shorts-color.png'

const categories = ['Tudo', 'Mixes', 'Submarinos', 'Aviação', 'Forró', 'Ferramentas', 'Música Sertaneja', 'Marcenarias', 'Engenharia Elétrica', 'Voo', 'Copa do Mundo', 'Magníficos']

const videos = [
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/5fI3cK7iDeg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDv3xERM49_Z-sd5tZgpAIzBjb_Tw", avatar: "https://yt3.ggpht.com/lbGdDAoV_KQmk653WLYuWE3WvDey4-0H690DM9UZbks4OaqfymCtrcQVAIckfvoAMyBJxGxFG9U=s48-c-k-c0x00ffffff-no-nd-rj", title: "Zé Felipe, @anacastelaoficial e @LuanPereiraLP - Roça Em Mim (Videoclipe Oficial)", channel: "Zé Felipe", views: "142 mi", time: "3 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", avatar: "https://yt3.googleusercontent.com/WwNb9K5L-icHkTfRsyn8eBohgbpiz3HHBxmnaWMv8IYw04ethbeIa7esoJV0ZzT05bEwAiP7Xog=s176-c-k-c0x00ffffff-no-rj-mo", title: "Marília Mendonça - Leão - Decretos Reais 2", channel: "Marília Mendonça", views: "109 mi", time: "2 meses"}
]

const shorts = [
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}
]

function Home() { 
    const { openMenu } = useContext(OpenMenuContext);
    
    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} >
            <CategoriesContainer openMenu={ openMenu }>
                {categories.map((item) => (
                    <Categories>{item}</Categories>
                ))}
            </CategoriesContainer>
            <Container shorts={false} openMenu={ openMenu }>
                {videos.map((video) => (
                    <VideoComponent video={video} />
                ))}
            </Container>
            <TitleShorts>
                <img src={Shorts} alt="shorts"/>
                <span>Shorts</span>
            </TitleShorts>
            <Container shorts={true} openMenu={ openMenu }>
                {shorts.map((short) => (
                    <ShortsComponent short={short} />
                ))}
            </Container>
            <ArrowDownButton>
                <img src={Arrow} alt="arrowdown" />
            </ArrowDownButton>
        </div>
    )
}

export default Home;