import { IVideos } from '../../types/types';
import { convertTime, convertViews } from '../../utilities/functions';
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';

function VideoSearchComponent(video: IVideos) { 
    function handleViews(views: string) {
        if (views === 'Sem') {
            return views
        } else {
            return convertViews(views)
        }
    }
    
    return (
        <Container>
            <ImageBanner src={video.thumb} />
            <TitleContainer>
                <Title>{video.title}</Title>
                <TextCard>{handleViews(video.views)} visualizações - {convertTime(video.time)}</TextCard>
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