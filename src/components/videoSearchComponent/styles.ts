import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;

    @media (max-width: 720px) {
        flex-direction: column;
        max-width: 360px;
    }
`;

export const ImageBanner = styled.img`
    min-width: 360px;
    max-width: 360px;
    aspect-ratio: 16 / 9;
    border-radius: 12px;

    @media (max-width: 720px) {
        width: 100%;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 0 20px;

    @media (max-width: 720px) {
        margin: 5px 0 0 0;
    }
`;

export const ChannelImage = styled.div<{avatar: string, color: string}>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ avatar, color }) => avatar ? 'transparent' : color};
    background-image: url(${({ avatar }) => avatar ? avatar : ''});
    background-size: cover;
    background-position: 50% 50%;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    min-width: 24px;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
`;

export const Title = styled.span`
    max-height: 60px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: #0f0f0f;
    font-size: 18px;
    line-height: 26px;
`;

export const TextCard = styled.span`
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    color: #8c8c8c;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
`;