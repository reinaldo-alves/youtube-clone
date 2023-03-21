import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
`;

export const ImageBanner = styled.img`
    max-width: 360px;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
`;

export const ChannelImage = styled.div<{avatar: string}>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ avatar }) => avatar ? 'transparent' : 'red'};
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
    max-height: 42px;
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
`;