import { IVideos } from '../../types/types';
import { convertViews } from '../../utilities/functions';
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';

function VideoSearchComponent(video: IVideos) { 
    return (
        <Container>
            <ImageBanner src={video.thumb} />
            <TitleContainer>
                <Title>{video.title}</Title>
                <TextCard>{convertViews(video.views)} visualizações - há {video.time}</TextCard>
                <TextContainer>
                    <ChannelImage avatar={video.avatar} color={video.color}>
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