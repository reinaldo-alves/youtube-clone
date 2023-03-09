import { useContext } from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import { Container, MenuItem, ButtonIcon, Section } from "./styles";
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

const mainMenu = [
    {icon: Home, title: 'Início'},
    {icon: Shor, title: 'Shorts'},
    {icon: Subs, title: 'Inscrições'}
]

const videoMenu = [
    {icon: Libr, title: 'Biblioteca'},
    {icon: Hist, title: 'Histórico'},
    {icon: Yvid, title: 'Seus vídeos'},
    {icon: Wlat, title: 'Assistir mais tarde'},
    {icon: Lvid, title: 'Vídeos marcados com "Gostei"'}
]

const subscriptionMenu = [
    {icon: Cast, title: 'Astro Channel'},
    {icon: Cneg, title: 'Business Channel'},
    {icon: Cqua, title: 'HQ Channel'},
    {icon: Cptv, title: 'TV Channel'},
    {icon: Cfil, title: 'Movie Channel'},
    {icon: Cgam, title: 'Game Channel'},
    {icon: Cmus, title: 'Music Channel'},
    {icon: Cset, title: 'Mostrar mais 23'}
]

const exploreMenu = [
    {icon: Tren, title: 'Em alta'},
    {icon: Shop, title: 'Shopping'},
    {icon: Musi, title: 'Música'},
    {icon: Movi, title: 'Filmes'},
    {icon: Live, title: 'Ao vivo'},
    {icon: Game, title: 'Jogos'},
    {icon: News, title: 'Notícias'},
    {icon: Spor, title: 'Esportes'},
    {icon: Lear, title: 'Aprender'}
]

const plusMenu = [
    {icon: Ypre, title: 'Youtube Premium'},
    {icon: Ystu, title: 'Estúdio de Criação'},
    {icon: Ymus, title: 'Youtube Music'},
    {icon: Ykid, title: 'Youtube Kids'}
]

const helpMenu = [
    {icon: Sett, title: 'Configurações'},
    {icon: Repo, title: 'Histórico de denúncias'},
    {icon: Help, title: 'Ajuda'},
    {icon: Feed, title: 'Enviar feedback'}
]

const Menus = [
    {title: '', body: mainMenu},
    {title: '', body: videoMenu},
    {title: '', body: subscriptionMenu},
    {title: '', body: exploreMenu},
    {title: '', body: plusMenu},
    {title: '', body: helpMenu}
]

function Menu() {
    const { openMenu } = useContext(OpenMenuContext);
    
    return (
        <Container openMenu={ openMenu }>
            {Menus.map((menu) => (
                <Section>
                    {menu.body.map((item) => (
                        <MenuItem openMenu={ openMenu }>
                            <ButtonIcon alt="" src={item.icon} />
                            <span>{item.title}</span>
                        </MenuItem>
                    ))}
                </Section>
            ))}
        </Container>
    )
}

export default Menu;