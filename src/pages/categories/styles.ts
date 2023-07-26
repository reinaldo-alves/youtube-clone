import styled from "styled-components";

export const Container = styled.div<{columns: number}>`
    width: auto;
    max-width: 1800px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(${({columns}) => columns? columns : ''}, 1fr);
    gap: 50px 20px;
    padding: 24px;
`;
