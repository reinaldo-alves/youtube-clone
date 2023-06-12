import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
`;

export const CategoriesContainer = styled.div<{ openMenu: boolean }>`
    width: 100%;
    padding: ${({ openMenu }) => openMenu? '0' : '0 24px'};
    display: flex;
    box-sizing: border-box;
    gap: 12px;
    white-space: nowrap;
    overflow-x: hidden;
    scroll-behavior: smooth;
`;

export const CategoriesButton = styled.div`
    margin: 12px 8px;
    border-radius: 50%;
    border: none;
    height: 32px;
    width: 32px;
    min-width: 32px;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: #d8d8d8;
    }

    img {
        height: 20px;
        width: 20px;
    }
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