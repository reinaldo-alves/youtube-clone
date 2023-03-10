import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '300px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const Section = styled.div<{ openMenu: boolean }>`
    width: 100%;
    padding: ${({ openMenu }) => openMenu? '10px 0' : '0'};
    border-bottom: ${({ openMenu }) => openMenu? '1px solid #d4d4d4' : 'none'};
`;

export const MenuItem = styled.div<{ openMenu: boolean, vis: boolean }>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: ${({ openMenu, vis }) => openMenu? 'flex' : vis? 'flex' : 'none'};
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu? '16px' : '12px'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const MenuTitle = styled.div<{ openMenu: boolean, title: string }>`
    padding: 2px 15px;
    font-size: 19px;
    font-weight: 600;
    box-sizing: border-box;
    display: ${({ openMenu, title }) => !openMenu? 'none' : title? 'block' : 'none'};
`;

export const ButtonIcon = styled.img`
    width: 25px;
`;

export const LinkContainer = styled.div<{ openMenu: boolean }>`
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    flex-wrap: wrap;
    font-size: 13px;
    color: #909090;

    a {
        text-decoration: none;
        font-weight: 600;
        color: #606060;
        margin-right: 8px;
        white-space: nowrap;
    }
`;