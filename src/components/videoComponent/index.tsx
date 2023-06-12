import { IVideos } from '../../types/types';
import { convertTime, convertViews } from '../../utilities/functions';
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';

function VideoComponent(props: IVideos) { 
    return (
        <Container>
            <ImageBanner src={props.thumb} />
            <TitleContainer>
                <ChannelImage avatar={props.avatar} color={props.color}>
                    {props.avatar? '' : props.channel.charAt(0)}
                </ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.channel}</TextCard>
                    <TextCard>{convertViews(props.views)} visualizações - {convertTime(props.time)}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;