import { Container, ImageBanner, TextCard, TextContainer, Title } from './styles';

interface IShorts {
    thumb: string,
    title: string,
    views: string
}

function ShortsComponent({ thumb, title, views}: IShorts) { 
    return (
        <Container>
            <ImageBanner src={thumb} />
            <TextContainer>
                <Title>{title}</Title>
                <TextCard>{views}</TextCard>
            </TextContainer>
        </Container>
    )
}

export default ShortsComponent;