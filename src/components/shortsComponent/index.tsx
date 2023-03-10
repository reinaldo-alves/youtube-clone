import { Container, ImageBanner, TextCard, TextContainer, Title } from './styles';

function ShortsComponent() { 
    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" />
            <TextContainer>
                <Title>Marília Mendonça - Leão - Decretos Reais 2</Title>
                <TextCard>109 mi de visualizações</TextCard>
            </TextContainer>
        </Container>
    )
}

export default ShortsComponent;