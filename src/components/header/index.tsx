import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import { useContext } from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function Header() {
    const { login, logOut } = useContext(UserContext);
    const { openMenu, setOpenMenu } = useContext(OpenMenuContext);
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

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>
                {login? 
                    <>
                        <ButtonContainer margin='0 0 0 10px'>
                            P
                        </ButtonContainer>
                        <span onClick={() => logOut()}>Sair</span>
                    </>
                :
                    <button onClick={() => navigate('/login')}>Fazer Login</button>
                }
            </HeaderButton>


        </Container>
    )
}

export default Header;