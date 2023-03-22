import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Container, Button, Title, InputContainer, Content, ImageContainer } from './styles';
import { ShortContext } from '../../contexts/shortContext';

function AddShorts(){
    const { newShort } = useContext(ShortContext);
    const { user, token } = useContext(UserContext);
    
    const [title, setTitle] = useState('');
    const [thumb, setThumb] = useState('');
    const [views, setViews] = useState('');
    
    return (
        <Container>
            <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}} >
                <Title>Detalhes do shorts</Title>
                <Button onClick={() => {
                    console.log([token, title, user.id, thumb, views])
                    newShort(token, title, user.id, thumb, views)
                }}>
                    ADICIONAR
                </Button>
            </div>
            <Content>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <InputContainer>
                        <label>Título (obrigatório)</label>
                        <textarea
                            wrap='hard'
                            maxLength={100}
                            rows={2}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={'Adicione um título que descreva o conteúdo do vídeo'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Miniatura</label>
                        <textarea
                            wrap='hard'
                            maxLength={5000}
                            rows={2}
                            value={thumb}
                            onChange={(e) => setThumb(e.target.value)}
                            placeholder={'Coloque o link de uma imagem que mostre o que há no seu vídeo'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Visualizações</label>
                        <textarea
                            wrap='hard'
                            maxLength={10}
                            rows={2}
                            value={views}
                            onChange={(e) => setViews(e.target.value)}
                            placeholder={'Adicione o número de visualizações do seu vídeo'}
                        />
                    </InputContainer>
                </div>
                <ImageContainer thumb={thumb}>
                    {thumb ? '' : 'Sua miniatura aparecerá aqui'}
                </ImageContainer>
            </Content>
    </Container>
    )
}

export default AddShorts;