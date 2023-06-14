import styled from "styled-components";

export const Container = styled.div<{ shorts: boolean, openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr) ${({ shorts, openMenu }) => shorts? '1fr 1fr' : openMenu? '' : '1fr'};
    gap: 50px 20px;
    padding: 24px;
    box-sizing: border-box;
`;

export const Banner = styled.div<{color: string}>`
    margin: 24px;
    border-radius: 8px;
    border: 5px solid ${({ color }) => color? color : 'transparent'};
    width: calc(100% - 50px);
    height: 150px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    column-gap: 20px;
    align-items: center;
    padding: 20px;
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
`;

export const Button = styled.button`
    box-sizing: border-box;
    height: 36px;
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