import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';

interface IVideo {
    thumb: string,
    avatar: string,
    title: string,
    channel: string,
    views: string
}

function VideoComponent({thumb, avatar, title, channel, views}: IVideo) { 
    return (
        <Container>
            <ImageBanner src={thumb} />
            <TitleContainer>
                <ChannelImage src={avatar} />
                <TextContainer>
                    <Title>{title}</Title>
                    <TextCard>{channel}</TextCard>
                    <TextCard>{views}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;