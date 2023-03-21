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

    :focus-within {
        border-color: #065fd4
    }
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
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }
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

export const UserAvatar = styled.div<{ avatar: string }>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ avatar }) => avatar ? 'transparent' : 'red'};
    background-image: url(${({ avatar }) => avatar ? avatar : ''});
    background-size: cover;
    background-position: 50% 50%;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
`;

export const Dropdown = styled.nav<{ dropdown: boolean }>`
    position: absolute;
    top: 40px;
    left: -132px;
    background-color: #fff;
    opacity: ${({ dropdown }) => dropdown ? '1' : '0'};
    visibility: ${({ dropdown }) => dropdown ? 'visible' : 'hidden'};
    width: 200px;
    box-sizing: border-box;
    border-radius: 12px;
    box-shadow: 0 1px 3px 0;
    border: none;
    display: flex;
    flex-direction: column;

    ul {
        padding: 0;

        li {
            text-decoration: none;
            list-style: none;
        }

    }

`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d3d3d3;
    padding: 15px;

    span {
        margin: 0 10px 0 15px;
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const MenuItem = styled.div`
    width: 100;
    min-height: 40px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    img {
        width: 20px;
    }

    span {
        font-weight: 400;
        margin-left: 20px;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;
