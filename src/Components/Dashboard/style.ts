import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

export const wrapper = styled.div`
    width: 40%;
    padding: 16px 32px;
    text-align:center;
    display: flex;
    flex-direction: column;
    h1 {
        margin: 2px;
    }
    h4 {
        margin: 2px;
        span {
            font-weight: normal;
            padding-right: 6px;
        }
    }
`;