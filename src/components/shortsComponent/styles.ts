import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ImageBanner = styled.img`
    width: 100%;
    aspect-ratio: 9 / 16;
    border-radius: 12px;
`;

export const TextContainer = styled.div`
    width: 100%;
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
    margin-top: 5px;
`;