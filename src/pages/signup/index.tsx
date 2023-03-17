import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Container, LoginButton, LoginInput, Title } from './styles';
import Logo from '../../assets/YouTube-Logo.png';

function SignUp(){
    const { newUser } = useContext(UserContext);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    
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
            />
            <LoginInput 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'E-mail'}
            />
            <LoginInput 
                type={'text'}
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder={'Link da foto de perfil'}
            />
            <LoginInput 
                type='password'
                value={password1}
                onChange={(p) => setPassword1(p.target.value)}
                placeholder={'Senha'}
            />
            <LoginInput 
                type='password'
                value={password2}
                onChange={(p) => setPassword2(p.target.value)}
                placeholder={'Confirmar Senha'}
            />
            <LoginButton onClick={() => {
                if(password1 === password2) {
                    const password = password1
                    newUser(name, email, password, avatar);
                } else {
                    alert('Senhas não são iguais. Tente novamente!')
                }
            }}>
                Cadastrar
            </LoginButton>
    </Container>
    )
}

export default SignUp;