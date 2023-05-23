import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
`;

export const Container = styled.div`
    width: 100%;
    height: auto;
    max-width: 580px;
    padding: 16px 32px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px #e3e3e3;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 10%;
`;

export const Form = styled.form`
    
`;

export const Label = styled.label`
    font-weight: normal;
    font-size: 12px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 4px 0;
    box-sizing: border-box;
    font-family: inherit;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 120px;
    padding: 12px 20px;
    margin: 4px 0;
    box-sizing: border-box;
    font-family: inherit;
`;