import styled from "styled-components";

export const Container = styled.div<{ shorts: boolean, openMenu: boolean }>`
    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
