import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { Container, MenuItem, ButtonIcon, Section, MenuTitle, LinkContainer } from "./styles";
import { useNavigate } from 'react-router-dom';
import Home from '../../assets/home.png'
import Shor from '../../assets/Shorts.png'
import Subs from '../../assets/subscriptions.png'
import Libr from '../../assets/library.png'
import Hist from '../../assets/history.png'
import Yvid from '../../assets/yourvideos.png'
import Wlat from '../../assets/wlater.png'
import Lvid from '../../assets/like.png'
import Tren from '../../assets/trending.png'
import Shop from '../../assets/shopping.png'
import Musi from '../../assets/music.png'
import Movi from '../../assets/movies.png'
import Live from '../../assets/live.png'
import Game from '../../assets/game.png'
import News from '../../assets/news.png'
import Spor from '../../assets/sports.png'
import Lear from '../../assets/learning.png'
import Ypre from '../../assets/youtubeicon.png'
import Ystu from '../../assets/ystudio.png'
import Ymus from '../../assets/ymusic.png'
import Ykid from '../../assets/ykids.png'
import Sett from '../../assets/setting.png'
import Repo from '../../assets/report.png'
import Help from '../../assets/help.png'
import Feed from '../../assets/feedback.png'
import Cast from '../../assets/canal-astronomia.png'
import Cneg from '../../assets/canal-negocios.png'
import Cqua from '../../assets/canal-quadrinhos.png'
import Cptv from '../../assets/canal-tv.png'
import Cfil from '../../assets/canal-filmes.png'
import Cgam from '../../assets/canal-game.png'
import Cmus from '../../assets/canal-musica.png'
import Cset from '../../assets/arrow-down.png'
import { UserContext } from "../../contexts/userContext";
import { VideoContext } from "../../contexts/videoContext";

const mainMenu = [
    {icon: Home, title: 'Início', vis: true, link: '/', cat: ''},
    {icon: Shor, title: 'Shorts', vis: true, link: '/shorts', cat: ''},
    {icon: Subs, title: 'Inscrições', vis: true, link: '/subscriptions', cat: ''}
]

const subscriptionMenu = [
    {icon: Cast, title: 'Astro Channel', vis: false, link: '/astrochannel', cat: ''},
    {icon: Cneg, title: 'Business Channel', vis: false, link: '/businesschannel', cat: ''},
    {icon: Cqua, title: 'HQ Channel', vis: false, link: '/hqchannel', cat: ''},
    {icon: Cptv, title: 'TV Channel', vis: false, link: '/tvchannel', cat: ''},
    {icon: Cfil, title: 'Movie Channel', vis: false, link: '/moviechannel', cat: ''},
    {icon: Cgam, title: 'Game Channel', vis: false, link: '/gamechannel', cat: ''},
    {icon: Cmus, title: 'Music Channel', vis: false, link: '/musicchannel', cat: ''},
    {icon: Cset, title: 'Mostrar mais 23', vis: false, link: '/subscriptions', cat: ''}
]

const exploreMenu = [
    {icon: Tren, title: 'Em alta', vis: false, link: '/tredings', cat: ''},
    {icon: Shop, title: 'Shopping', vis: false, link: '/categories/Shopping', cat: 'Shopping'},
    {icon: Musi, title: 'Música', vis: false, link: '/categories/Música', cat: 'Música'},
    {icon: Movi, title: 'Filmes', vis: false, link: '/categories/Filmes', cat: 'Filmes'},
    {icon: Live, title: 'Ao vivo', vis: false, link: '/categories/Ao Vivo', cat: 'Ao Vivo'},
    {icon: Game, title: 'Jogos', vis: false, link: '/categories/Jogos', cat: 'Jogos'},
    {icon: News, title: 'Notícias', vis: false, link: '/categories/Notícias', cat: 'Notícias'},
    {icon: Spor, title: 'Esportes', vis: false, link: '/categories/Esportes', cat: 'Esportes'},
    {icon: Lear, title: 'Aprender', vis: false, link: '/categories/Aprender', cat: 'Aprender'}
]

const plusMenu = [
    {icon: Ypre, title: 'Youtube Premium', vis: false, link: '/youtube-premium', cat: ''},
    {icon: Ystu, title: 'Estúdio de Criação', vis: false, link: '/youtube-studio', cat: ''},
    {icon: Ymus, title: 'Youtube Music', vis: false, link: '/youtube-music', cat: ''},
    {icon: Ykid, title: 'Youtube Kids', vis: false, link: '/youtube-kids', cat: ''}
]

const helpMenu = [
    {icon: Sett, title: 'Configurações', vis: false, link: '/settings', cat: ''},
    {icon: Repo, title: 'Histórico de denúncias', vis: false, link: '/reports', cat: ''},
    {icon: Help, title: 'Ajuda', vis: false, link: '/help', cat: ''},
    {icon: Feed, title: 'Enviar feedback', vis: false, link: '/sendfeedback', cat: ''}
]

const Links = [
    ['Sobre', 'Imprensa', 'Direitos Autorais', 'Entre em contato', 'Criadores de conteúdo', 'Publicidade', 'Desenvolvedores'],
    ['Termos', 'Privacidade', 'Política e segurança', 'Como funciona o Youtube', 'Testar os novos recursos']
] 

function Menu() {
    const { openMenu } = useContext(MenuContext);
    const { user } = useContext(UserContext);
    const { setCategory } = useContext(VideoContext);
    const navigate = useNavigate();
    
    const videoMenu = [
        {icon: Libr, title: 'Biblioteca', vis: true, link: '/library', cat: ''},
        {icon: Hist, title: 'Histórico', vis: false, link: '/history', cat: ''},
        {icon: Yvid, title: 'Seus vídeos', vis: false, link: `/yourvideos?user_id=${user.id}`, cat: ''},
        {icon: Wlat, title: 'Assistir mais tarde', vis: false, link: '/watchlater', cat: ''},
        {icon: Lvid, title: 'Vídeos marcados com "Gostei"', vis: false, link: '/likedvideos', cat: ''}
    ]

    const Menus = [
        {title: '', body: mainMenu},
        {title: '', body: videoMenu},
        {title: 'Inscrições', body: subscriptionMenu},
        {title: 'Explorar', body: exploreMenu},
        {title: 'Mais do Youtube', body: plusMenu},
        {title: '', body: helpMenu}
    ]

    return (
        <Container openMenu={ openMenu }>
            {Menus.map((menu) => (
                <Section openMenu={ openMenu }>
                    <MenuTitle openMenu={ openMenu } title={menu.title}>
                        {menu.title}
                    </MenuTitle>
                    {menu.body.map((item) => (
                        <MenuItem 
                            openMenu={ openMenu }
                            vis={item.vis}
                            onClick={() => {
                                navigate(item.link)
                                setCategory(item.cat)
                            }}
                        >
                            <ButtonIcon alt="" src={item.icon} />
                            <span>{item.title}</span>
                        </MenuItem>
                    ))}
                </Section>
            ))}
            <div style={{ padding: '10px' }}>
                {Links.map((item) => (
                    <LinkContainer openMenu={ openMenu }>
                        {item.map((link) => (
                            <a href="#">{link}</a>
                        ))}
                    </LinkContainer>
                ))}
                <LinkContainer openMenu={ openMenu }>
                    © 2023 Google LLC
                </LinkContainer>
            </div>
        </Container>
    )
}

export default Menu;