import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 24px;
    width: 100%;
    max-width: 1200px;
`;

export const Title = styled.h1`
    box-sizing: border-box;
    padding: 19px 0;
    font-size: 25px;
    font-weight: 600;
    margin: 0;
    `;

export const Button = styled.button`
    box-sizing: border-box;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background-color: #065fd4;
    border-radius: 4px;
    padding: 0 15px;
    outline: 0;
    border: none;

    :hover {
        background-color: #6200ee;
        cursor: pointer;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
`;

export const InputContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #d3d3d3;
    margin-bottom: 20px;
    padding: 0 12px 12px 12px;

    :hover {
        border-color: #000;
    }

    :focus-within {
        border-color: #fff;
        outline: 2px solid #065fd4;
    }

    label {
        box-sizing: border-box;
        font-size: 12px;
        font-weight: 400;
        color: #606060;
        padding: 8px 0 3px 0;
        width: 100%;
    }

    textarea {
        box-sizing: border-box;
        width: 100%;
        height: auto;
        font-size: 15px;
        font-weight: 400;
        color: #0d0d0d;
        border: none;
        outline: none;
        min-height: 29px;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        resize: none;
        margin-top: 5px;
    }

    select {
        box-sizing: border-box;
        width: 100%;
        height: auto;
        border: none;
        outline: none;
        min-height: 29px;
        padding: 0;
        margin-top: 5px;
        font-size: 15px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #0d0d0d;
        
        option {
            font-size: 15px;
            font-weight: 400;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: #0d0d0d;
        }

    }

`;

export const ImageContainer = styled.div<{thumb: string}>`
    height: 100%;
    margin-bottom: 20px;
    background-image: url(${({ thumb }) => thumb ? thumb : ''});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: ${({ thumb }) => thumb ? 'none' : '1px solid #d3d3d3'};
    color: #606060;
    text-align: center;
`;
