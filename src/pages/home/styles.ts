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

export const ShortsContainer = styled.div<{openMenu: boolean}>`
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

export const TitleShorts = styled.div`
    width: calc(100% - 48px);
    max-width: 1800px;
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