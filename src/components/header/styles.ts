import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin ? margin: 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div<{ login: boolean }>`
    width: ${({ login }) => login ? '200px' : 'auto'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginButton = styled.div`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    height: 35px;
    color: #065fd4;
    border-radius: 17px;
    border: 1px solid #d3d3d3;
    background: transparent;
    box-sizing: border-box;
    padding: 5px 15px;
    white-space: nowrap;
    justify-content: flex-end;

    :hover {
        background-color: aliceblue;
    }
`;

export const UserAvatar = styled.div<{ login?: boolean }>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: 10px;
    display: ${({ login }) => login ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: red;
    color: #fff;
    font-size: 18px;
    font-weight: 500;

    :hover {
        cursor: pointer;
    }
`;

export const Dropdown = styled.nav<{ dropdown: boolean }>`
    position: absolute;
    top: 35px;
    left: -232px;
    background-color: aliceblue;
    opacity: ${({ dropdown }) => dropdown ? '1' : '0'};
    visibility: ${({ dropdown }) => dropdown ? 'visible' : 'hidden'};
    width: 300px;
    box-sizing: border-box;
    border-radius: 12px;
    box-shadow: 0 1px 3px 0;
    border: none;
    display: flex;
    flex-direction: column;

    ul li {
        text-decoration: none;
        list-style: none;
    }
`;

