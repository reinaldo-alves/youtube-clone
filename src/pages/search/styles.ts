import styled from "styled-components";

export const Container = styled.div<{short: Number}>`
    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: ${({ short }) => short===0? 'none' : '4px solid #d4d4d4'};
`;

export const TitleShorts = styled.div<{video: Number}>`
    box-sizing: border-box;
    width: calc(100% - 48px);
    padding-top: ${({ video }) => video===0? '0' : '30px'};
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

export const ContainerShorts = styled.div`
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px 20px;
    padding: 4px 24px 24px 24px;
`;

export const TextNone = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    text-align: center;
    font-size: 18px;
`;