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
import { useContext, useRef } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { VideoContext } from "../../contexts/videoContext";
import { ShortContext } from "../../contexts/shortContext";
import { loadChannelImages, loadVideosAPI } from "../../utilities/functions";

function Header() {
    const { token, login, logOut, initial, user, avatar, userColor } = useContext(UserContext);
    const { openMenu, setOpenMenu, showMenu, setShowMenu, dropdown, setDropdown, dropVideo, setDropVideo, dropSearch, setDropSearch } = useContext(MenuContext);
    const { search, setSearch, searchVideos, setVideoSearchAPI, channelImagesSearch, setChannelImagesSearch } = useContext(VideoContext);
    const { searchShorts } = useContext(ShortContext);
    const navigate = useNavigate();
    const inputSearch = useRef<HTMLInputElement>(null);

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

    const fetchData = async () => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search.trim()}&maxResults=60&key=AIzaSyDeTcmAPDBl7cmV-R4OeGGn8xS5Q_FaifE`
        const apiVideos = await loadVideosAPI(url);
        const images = await loadChannelImages(apiVideos);
        setChannelImagesSearch(images);
        setVideoSearchAPI(apiVideos);
    };

    const handleSearch = () => {
        if (search.trim()) {
            fetchData();
            searchVideos(search.trim());
            searchShorts(search.trim())
            navigate(`/search?search=${search.trim()}`);
            setSearch('')
            if (inputSearch.current) {inputSearch.current.blur()}
        } else {
            alert('Digite algo no campo de pesquisa para continuar')
        }
    }

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => {
                    if (window.innerWidth > 920) {
                        setOpenMenu(!openMenu)
                        setShowMenu(false)
                    } else {
                        setOpenMenu(true)
                        setShowMenu(!showMenu)
                    }
                }} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon} />
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt=''
                    src={Logo}
                    onClick={() => navigate('/')}
                />
            </LogoContainer>

            <SearchContainer  show={window.innerWidth > 920}>
                <SearchInputContainer>
                    <SearchInput 
                        ref={inputSearch}
                        type={'text'}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Pesquisar"
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                handleSearch()
                            }
                        }}
                    />
                </SearchInputContainer>
                <SearchButton 
                    onClick={handleSearch}
                >
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton login={login} token={token}>
                <div style={{position: 'relative', display: `${window.innerWidth > 920? 'none' : 'flex'}`}}>
                    <ButtonContainer 
                        margin={`${login? '0 0 0 10px' : '0 10px 0 0'}`}
                        onClick={() => setDropSearch(!dropSearch)}
                    >
                        <ButtonIcon alt="" src={SearchIcon}/>
                    </ButtonContainer>
                    <Dropdown
                        dropdown={dropSearch}
                        right={`${login ? "-150px" : "-110px"}`}
                        style={{padding: '10px', width: `${window.innerWidth > 500? '400px' : '280px'}`}}
                    >
                        <SearchContainer  show={true}>
                            <SearchInputContainer>
                                <SearchInput 
                                    ref={inputSearch}
                                    type={'text'}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Pesquisar"
                                    onKeyUp={(e) => {
                                        if (e.key === "Enter") {
                                            handleSearch()
                                            setDropSearch(false)
                                        }
                                    }}
                                />
                            </SearchInputContainer>
                            <SearchButton 
                                onClick={() => {
                                    handleSearch()
                                    setDropSearch(false)
                                }}
                            >
                                <ButtonIcon alt="" src={SearchIcon} />
                            </SearchButton>
                            <ButtonContainer margin='0 0 0 10px'>
                                <ButtonIcon alt="" src={MicIcon} />
                            </ButtonContainer>
                        </SearchContainer>
                    </Dropdown>
                    <Overlay dropdown={dropSearch} onClick={() => setDropSearch(false)}/>
                </div>
                {login && token? 
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
                                {videoMenu.map((item, index) => (
                                    <li key={index} onClick={item.link}>
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
                                color={userColor}
                                style={{cursor:'pointer'}}
                            >
                                {avatar? '' : initial}
                            </UserAvatar>
                        </ButtonContainer>
                        <Dropdown dropdown={dropdown} onClick={() => setDropdown(false)}>
                            <ProfileContainer>
                                <UserAvatar avatar={avatar} color={userColor}>{avatar? '' : initial}</UserAvatar>
                                <span>{user.nome}</span>
                            </ProfileContainer>
                            <ul>
                                {userMenu.map((item, index) => (
                                    <li key={index} onClick={item.link}>
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