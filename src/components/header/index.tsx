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
    MenuItem
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import Edit from '../../assets/edit.png'
import Exit from '../../assets/logout.png'
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function Header() {
    const { login, logOut, initial, user, avatar } = useContext(UserContext);
    const { openMenu, setOpenMenu, dropdown, setDropdown } = useContext(MenuContext);
    const navigate = useNavigate();

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
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton login={login}>
                {login? 
                <>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={VideoIcon} />
                    </ButtonContainer>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={NotificationIcon} />
                    </ButtonContainer>
                    <div style={{position:'relative'}}>
                        <ButtonContainer margin='0 0 0 10px'>
                            <UserAvatar 
                                avatar={avatar}
                                onClick={() => setDropdown(!dropdown)}
                                style={{cursor:'pointer'}}
                            >
                                {avatar? '' : initial}
                            </UserAvatar>
                        </ButtonContainer>
                        <Dropdown dropdown={dropdown}>
                            <ProfileContainer>
                                <UserAvatar avatar={avatar}>{avatar? '' : initial}</UserAvatar>
                                <span>{user.nome}</span>
                            </ProfileContainer>
                            <ul>
                                <li>
                                    <MenuItem>
                                        <img alt="" src={Edit} />
                                        <span>Editar conta</span>
                                    </MenuItem>
                                </li>
                                <li onClick={() => logOut()}>
                                    <MenuItem>
                                        <img alt="" src={Exit} />
                                        <span>Sair</span>
                                    </MenuItem>
                                </li>
                            </ul>
                        </Dropdown>
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