import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { Container, LoginButton, LoginInput, SignUpContainer, Subtitle, Title } from './styles';
import Logo from '../../assets/YouTube-Logo.png';

function Login(){
    const { token, login, handleLogin, errorMessage } = useContext(UserContext);
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(login && token){
            navigate('/');
        }
    },[login, token])
    
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
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
                }}>
                    Login
                </LoginButton>
                <span style={{color:'red', minHeight:'1.5rem'}}>
                    {errorMessage}
                </span>
                <SignUpContainer>
                    Ainda não tem uma conta?
                    <span onClick={() => navigate('/signup')}>Cadastre-se</span>
                </SignUpContainer>
            </Container>
        </div>
    )
}

export default Login;