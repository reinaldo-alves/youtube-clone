import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    max-width: 1800px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 50px 20px;
    padding: 24px;
`;

export const Banner = styled.div<{color: string}>`
    margin: 24px;
    border-radius: 8px;
    border: 5px solid ${({ color }) => color? color : 'transparent'};
    width: calc(100% - 50px);
    height: 150px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: auto;
        height: 200px;
        justify-content: center;
    }
`;

export const ChannelTitle = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 36px;
    width: fit-content;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const UserAvatar = styled.div<{ avatar: string, color: string }>`
    width: 100px;
    min-width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ avatar, color }) => avatar ? 'transparent' : color};
    background-image: url(${({ avatar }) => avatar ? avatar : ''});
    background-size: cover;
    background-position: 50% 50%;
    color: #fff;
    font-size: 60px;
    font-weight: 500;

    @media (max-width: 768px) {
        width: 70px;
        min-width: 70px;
        height: 70px;
        font-size: 50px;
    }
`;

export const Button = styled.button`
    box-sizing: border-box;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background-color: #065fd4;
    border-radius: 4px;
    padding: 0 15px;
    outline: 0;
    border: none;

    :hover {
        background-color: #6200ee;
        cursor: pointer;
    }
`;