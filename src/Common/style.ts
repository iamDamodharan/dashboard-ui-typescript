import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: #008CBA;
    color: #FFFFFF;
    border: 1px solid #008CBA;
    padding: 10px 24px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    margin: 2px;
    &:disabled {
        opacity: 0.5;
    }
`;

export const SecondaryButton = styled.button`
    background-color: #FFFFFF;
    color: #008CBA;
    border: 1px solid #008CBA;
    padding: 10px 24px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    margin: 2px ;
    &:disabled {
        opacity: 0.5;
    }
`;