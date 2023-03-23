import styled from "styled-components";

export const Container = styled.div<{ shorts: boolean, openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr) ${({ shorts, openMenu }) => shorts? '1fr 1fr' : openMenu? '' : '1fr'};
    gap: 50px 20px;
    padding: 24px;
`;

export const CategoriesContainer = styled.div<{ openMenu: boolean }>`
    width: calc(100vw - ${({ openMenu }) => openMenu? '300px' : '100px'});
    padding: ${({ openMenu }) => openMenu? '0' : '0 24px'};
    display: flex;
    box-sizing: border-box;
    gap: 12px;
    white-space: nowrap;
    overflow-x: auto;
`;

export const Categories = styled.div`
    margin: 12px 0;
    border-radius: 8px;
    border: none;
    height: 32px;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    padding: 0 12px;

    :hover {
        background-color: #d8d8d8;
    }
`;

export const TitleShorts = styled.div`
    width: calc(100% - 48px);
    border-top: 4px solid #d4d4d4;
    padding: 30px 0 6px 0px;
    display: flex;
    align-items: center;

    img {
        width: 25px;
        margin-left: 20px;
    }

    span {
        margin-left: 10px;
        font-size: 19px;
        font-weight: 600;
    }
`;

export const ArrowDownButton = styled.div`
    width: calc(100% - 48px);
    border-bottom: 4px solid #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: #d4d4d4;
        cursor: pointer;
        border-bottom: 4px solid #fff;
    }

    img {
        height: 25px;
        width: 25px;
    }
`;