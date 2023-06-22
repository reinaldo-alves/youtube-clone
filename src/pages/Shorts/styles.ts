import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
    width: auto;
    max-width: 1800px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px 20px;
    padding: 24px;

    @media (max-width: ${({openMenu}) => openMenu? '1240px' : '1100px'}) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({openMenu}) => openMenu? '760px' : '610px'}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({openMenu}) => openMenu? '600px' : '440px'}) {
        grid-template-columns: 1fr;
    }
`;