import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    LoginButton,
    UserAvatar,
    Dropdown,
    ProfileContainer,
    MenuItem,
    Overlay
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import Edit from '../../assets/edit.png'
import Exit from '../../assets/logout.png'
import Yvid from '../../assets/yourvideos.png'
import Shor from '../../assets/Shorts.png'
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { VideoContext } from "../../contexts/videoContext";
import { ShortContext } from "../../contexts/shortContext";

function Header() {
    const { login, logOut, initial, user, avatar } = useContext(UserContext);
    const { openMenu, setOpenMenu, dropdown, setDropdown, dropVideo, setDropVideo } = useContext(MenuContext);
    const { search, setSearch, searchVideos } = useContext(VideoContext);
    const { searchShorts } = useContext(ShortContext);
    const navigate = useNavigate();
    const userMenu = [
        {icon: Edit, title: 'Editar conta', link: () => {}},
        {icon: Yvid, title: 'Seus vídeos', link: () => navigate(`/yourvideos?user_id=${user.id}`)},
        {icon: Shor, title: 'Seus shorts', link: () => navigate(`/yourshorts?user_id=${user.id}`)},
        {icon: Exit, title: 'Sair', link: () => logOut()}
    ]
    const videoMenu = [
        {icon: VideoIcon, title: 'Adicionar vídeo', link: () => navigate('/addvideo')},
        {icon: Shor, title: 'Adicionar shorts', link: () => navigate('/addshorts')}
    ]

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon} />
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt=''
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput 
                        type={'text'}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Pesquisar"
                    />
                </SearchInputContainer>
                <SearchButton 
                    onClick={() => {
                        searchVideos(search);
                        searchShorts(search)
                        navigate(`/search?search=${search}`);
                    }}
                >
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton login={login}>
                {login? 
                <>
                    <div style={{position:'relative'}}>
                        <ButtonContainer
                            margin='0 0 0 10px'
                            onClick={() => setDropVideo(!dropVideo)}
                        >
                            <ButtonIcon alt="" src={VideoIcon}/>
                        </ButtonContainer>
                        <Dropdown dropdown={dropVideo} onClick={() => setDropVideo(false)}>
                            <ul>
                                {videoMenu.map((item) => (
                                    <li onClick={item.link}>
                                        <MenuItem>
                                            <img alt="" src={item.icon} />
                                            <span>{item.title}</span>
                                        </MenuItem>
                                    </li>
                                ))}
                            </ul>
                        </Dropdown>
                        <Overlay dropdown={dropVideo} onClick={() => setDropVideo(false)}/>
                    </div>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={NotificationIcon} />
                    </ButtonContainer>
                    <div style={{position:'relative'}}>
                        <ButtonContainer
                            margin='0 0 0 10px'
                            onClick={() => setDropdown(!dropdown)}
                        >
                            <UserAvatar 
                                avatar={avatar}
                                style={{cursor:'pointer'}}
                            >
                                {avatar? '' : initial}
                            </UserAvatar>
                        </ButtonContainer>
                        <Dropdown dropdown={dropdown} onClick={() => setDropdown(false)}>
                            <ProfileContainer>
                                <UserAvatar avatar={avatar}>{avatar? '' : initial}</UserAvatar>
                                <span>{user.nome}</span>
                            </ProfileContainer>
                            <ul>
                                {userMenu.map((item) => (
                                    <li onClick={item.link}>
                                        <MenuItem>
                                            <img alt="" src={item.icon} />
                                            <span>{item.title}</span>
                                        </MenuItem>
                                    </li>
                                ))}
                            </ul>
                        </Dropdown>
                        <Overlay dropdown={dropdown} onClick={() => setDropdown(false)}/>
                    </div>
                </>
                :
                    <LoginButton onClick={() => navigate('/login')}>
                        Fazer login
                    </LoginButton>
                }
            </HeaderButton>


        </Container>
    )
}

export default Header;