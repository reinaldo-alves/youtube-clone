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
