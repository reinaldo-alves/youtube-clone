import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

export const ImageBanner = styled.img`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;
`;

export const ChannelImage = styled.div<{avatar: string, color: string}>`
    width: 35px;
    height: 35px;
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
    font-size: 18px;
    font-weight: 500;
    min-width: 35px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    max-height: 42px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    font-size: 14px;
    color: #8c8c8c;
`;