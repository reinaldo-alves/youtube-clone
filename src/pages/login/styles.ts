import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 10px;
    border: 1px solid #d3d3d3;
    margin: 24px 0;
`;

export const Title = styled.h1`
    box-sizing: border-box;
    width: 300px;
    padding-top: 16px;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin: 0;
`;

export const Subtitle = styled.div`
    box-sizing: border-box;
    width: 300px;
    padding: 7px 0 1px 0;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 24px;
`;

export const LoginInput = styled.input`
    box-sizing: border-box;
    width: 300px;
    padding: 13px 15px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    border: 1px solid #d3d3d3;
    margin: 8px 0;

    :focus {
        border-color: #fff;
        outline: 2px solid #065fd4;
    }
`;

export const ShowPasswordHandler = styled.div`
    width: 300px;
    font-size: 14px;
    text-align: left;
    color: #065fd4;
    font-weight: 500;
    margin-left: 5px;
    
    span {
        cursor: pointer;

        :hover {
            text-decoration: underline;
        }
    }
`;

export const LoginButton = styled.button`
    box-sizing: border-box;
    margin-top: 24px;
    width: 110px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #065fd4;
    border-radius: 4px;
    padding: 0;
    outline: 0;
    border: none;

    :hover {
        background-color: #6200ee;
        cursor: pointer;
    }
`;

export const SignUpContainer = styled.div`
    width: 300px;
    font-size: 14px;
    margin-top: 36px;
    text-align: center;

    span {
        color: #065fd4;
        cursor: pointer;
        font-weight: 500;
        margin-left: 5px;

        :hover {
            text-decoration: underline;
        }
    }
`;
