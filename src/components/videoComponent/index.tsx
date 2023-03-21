import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';

interface IVideo {
    thumb: string,
    avatar: string,
    title: string,
    channel: string,
    views: string,
    time: string
}

function VideoComponent({video}: any) { 
    return (
        <Container>
            <ImageBanner src={video.thumb} />
            <TitleContainer>
                <ChannelImage avatar={video.avatar}>
                    {video.avatar? '' : video.channel.charAt(0)}
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} visualizações - há {video.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;