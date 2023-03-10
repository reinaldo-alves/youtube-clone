import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';

function VideoComponent() { 
    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" />
            <TitleContainer>
                <ChannelImage>
                    MM
                </ChannelImage>
                <TextContainer>
                    <Title>Marília Mendonça - Leão - Decretos Reais 2</Title>
                    <TextCard>Marília Mendonça</TextCard>
                    <TextCard>109 mi de visualizações - há 2 meses</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;