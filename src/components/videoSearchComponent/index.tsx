import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';

interface IVideo {
    thumb: string,
    avatar: string,
    title: string,
    channel: string,
    views: string,
    time: string
}

function VideoSearchComponent({video}: any) { 
    return (
        <Container>
            <ImageBanner src={video.thumb} />
            <TitleContainer>
                <Title>{video.title}</Title>
                <TextCard>{video.views} visualizações - há {video.time}</TextCard>
                <TextContainer>
                    <ChannelImage avatar={video.avatar}>
                        {video.avatar? '' : video.channel.charAt(0)}
                    </ChannelImage>
                    <TextCard>{video.channel}</TextCard>
                </TextContainer>
                <TextCard>{video.description}</TextCard>
            </TitleContainer>
        </Container>
    )
}

export default VideoSearchComponent;