import { Container, ImageBanner, TextCard, TextContainer, Title } from './styles';

interface IShorts {
    thumb: string,
    title: string,
    views: string
}

function ShortsComponent({ short }: any) { 
    if(!short) {
        short = {thumb: '', title: '', views: ''}
    }

    return (
        <Container>
            <ImageBanner src={short.thumb} />
            <TextContainer>
                <Title>{short.title}</Title>
                <TextCard>{short.views} visualizações</TextCard>
            </TextContainer>
        </Container>
    )
}

export default ShortsComponent;