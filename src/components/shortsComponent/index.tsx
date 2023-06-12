import { IShorts } from '../../types/types';
import { convertViews } from '../../utilities/functions';
import { Container, ImageBanner, TextCard, TextContainer, Title } from './styles';

function ShortsComponent(short: IShorts) { 
    if(!short) {
        short = {thumb: '', title: '', views: ''}
    }

    return (
        <Container>
            <ImageBanner src={short.thumb} />
            <TextContainer>
                <Title>{short.title}</Title>
                <TextCard>{convertViews(short.views)} visualizações</TextCard>
            </TextContainer>
        </Container>
    )
}

export default ShortsComponent;