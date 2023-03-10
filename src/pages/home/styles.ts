import styled from "styled-components";

export const Container = styled.div<{ shorts: boolean, openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr) ${({ shorts, openMenu }) => shorts? '1fr 1fr' : openMenu? '' : '1fr'};
    gap: 50px 20px;
    padding: 24px;
    box-sizing: border-box;
`;

export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 24px;
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