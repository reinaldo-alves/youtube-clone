import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { Container, LoginButton, LoginInput, ShowPasswordHandler, SignUpContainer, Subtitle, Title } from './styles';
import Logo from '../../assets/YouTube-Logo.png';

function Login(){
    const { token, login, handleLogin, errorMessage } = useContext(UserContext);
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            if (email.trim() && password.trim()) {
                                handleLogin(email, password);
                            } else {
                                alert('Preencha todos os dados corretamente')
                            }
                        }
                    }}
                />
                <LoginInput 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(p) => setPassword(p.target.value)}
                    placeholder={'Senha'}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            if (email.trim() && password.trim()) {
                                handleLogin(email, password);
                            } else {
                                alert('Preencha todos os dados corretamente')
                            }
                        }
                    }}
                />
                <ShowPasswordHandler onClick={() => setShowPassword(!showPassword)}>
                    <span>{showPassword? 'Ocultar senha' : 'Mostrar senha'}</span>
                </ShowPasswordHandler>
                <LoginButton onClick={() => {
                    if (email.trim() && password.trim()) {
                        handleLogin(email, password);
                    } else {
                        alert('Preencha todos os dados corretamente')
                    }
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