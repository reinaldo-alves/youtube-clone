import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Container, Button, Title, InputContainer, Content, ImageContainer } from './styles';
import { VideoContext } from '../../contexts/videoContext';
import { useNavigate } from 'react-router-dom';

function AddVideo(){
    const { newVideo } = useContext(VideoContext);
    const { user, token } = useContext(UserContext);
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumb, setThumb] = useState('');
    const [views, setViews] = useState('');
    const [category, setCategory] = useState('');

    const navigate = useNavigate();
    
    const now = new Date();
    
    return (
        <Container>
            <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}} >
                <Title>Detalhes do vídeo</Title>
                <Button onClick={() => {
                    console.log([token, title, description, user.id, thumb, views, now, category, user.nome, user.avatar, user.color])
                    if (title.trim()) {
                        newVideo(token, title, description, user.id, thumb, views, now, category, user.nome, user.avatar, user.color)
                        navigate(`/yourvideos?user_id=${user.id}`);
                    }
                }}>
                    ADICIONAR
                </Button>
            </div>
            <Content>
                <div>
                    <InputContainer>
                        <label>Título (obrigatório)</label>
                        <textarea
                            wrap='hard'
                            maxLength={100}
                            rows={1}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={'Adicione um título que descreva o conteúdo do vídeo'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Descrição</label>
                        <textarea
                            wrap='hard'
                            maxLength={5000}
                            rows={9}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={'Fale sobre seu vídeo para os espectadores'}
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
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <ImageContainer thumb={thumb}>
                        {thumb ? '' : 'Sua miniatura aparecerá aqui'}
                    </ImageContainer>
                    <InputContainer>
                        <label>Visualizações</label>
                        <textarea
                            wrap='hard'
                            maxLength={10}
                            rows={1}
                            value={views}
                            onChange={(e) => setViews(e.target.value)}
                            placeholder={'Adicione o número de visualizações do seu vídeo'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Categoria</label>
                        <select 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Selecione a categoria do seu vídeo</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Música">Música</option>
                            <option value="Filmes">Filmes</option>
                            <option value="Ao vivo">Ao vivo</option>
                            <option value="Jogos">Jogos</option>
                            <option value="Notícias">Notícias</option>
                            <option value="Esportes">Esportes</option>
                            <option value="Aprender">Aprender</option>
                        </select>
                    </InputContainer>
                </div>
            </Content>
    </Container>
    )
}

export default AddVideo;