import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '290px' : '100px'};
    height: 100vh;
    box-sizing: border-box;
    margin-top: 55px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
`;

export const Section = styled.div`
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #d4d4d4;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 100%;
    min-height: ${({ openMenu }) => openMenu? '40px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 3px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu? '500' : '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu? '14px' : '12px'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
`;