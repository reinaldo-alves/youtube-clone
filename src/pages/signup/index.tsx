import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Container, LoginButton, LoginInput, ShowPasswordHandler, Title } from './styles';
import Logo from '../../assets/YouTube-Logo.png';

function SignUp(){
    const { newUser } = useContext(UserContext);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handleNewUser() {
        if (name.trim() && email.trim() && password1.trim() && password2.trim()) {
            if (/\S+@\S+\.\S+/.test(email)) {
                if(password1 === password2) {
                    const password = password1
                    newUser(name, email, password, avatar);
                } else {
                    alert('Senhas não são iguais. Tente novamente!')
                }
            } else {
                alert('Email inválido. Tente novamente com outro email')
            }
        } else {
            alert('Preencha todos os dados corretamente');
        }
    }
    
    return (
        <Container>
            <img 
                style={{ cursor: 'pointer', width: '100px' }}
                alt=''
                src={Logo}
            />
            <Title>Crie sua conta no Youtube</Title>
            <LoginInput 
                type={'text'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Nome'}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleNewUser()
                    }
                }}
            />
            <LoginInput 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'E-mail'}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleNewUser()
                    }
                }}
            />
            <LoginInput 
                type={'text'}
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder={'Link da foto de perfil (opcional)'}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleNewUser()
                    }
                }}
            />
            <LoginInput 
                type={showPassword ? 'text' : 'password'}
                value={password1}
                onChange={(p) => setPassword1(p.target.value)}
                placeholder={'Senha'}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleNewUser()
                    }
                }}
            />
            <LoginInput 
                type={showPassword ? 'text' : 'password'}
                value={password2}
                onChange={(p) => setPassword2(p.target.value)}
                placeholder={'Confirmar Senha'}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleNewUser()
                    }
                }}
            />
            <ShowPasswordHandler onClick={() => setShowPassword(!showPassword)}>
                <span>{showPassword? 'Ocultar senha' : 'Mostrar senha'}</span>
            </ShowPasswordHandler>
            <LoginButton onClick={() => handleNewUser()}>
                Cadastrar
            </LoginButton>
        </Container>
    )
}

export default SignUp;