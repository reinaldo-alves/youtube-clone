import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { Container, LoginButton, LoginInput, SignUpContainer, Subtitle, Title } from './styles';
import Logo from '../../assets/YouTube-Logo.png';

function Login(){
    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <Container>
            <img 
                style={{ cursor: 'pointer', width: '100px' }}
                alt=''
                src={Logo}
            />
            <Title>Fazer login</Title>
            <Subtitle>Prosseguir no Youtube</Subtitle>
            <LoginInput 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'E-mail'}
            />
            <LoginInput 
                type='password'
                value={password}
                onChange={(p) => setPassword(p.target.value)}
                placeholder={'Senha'}
            />
            <LoginButton onClick={() => {
                handleLogin(email, password);
                navigate('/')
            }}>
                Login
            </LoginButton>
            <SignUpContainer>
                Ainda não tem uma conta?
                <span>Cadastre-se</span>
            </SignUpContainer>
    </Container>
    )
}

export default Login;