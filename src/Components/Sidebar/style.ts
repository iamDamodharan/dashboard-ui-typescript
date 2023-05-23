import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 240px;
    padding: 12px 0px;
    height: 100%;
    box-shadow: 0px 0px 0px #e3e3e3;
    background-color: #000;
    color: #fff;
`;

export const Menu = styled.nav`
	height:100%;
	width: 100%;
	top:0;
	left:0;
	z-index:5;
	outline:none;
`;

export const Avatar = styled.div`
    background: rgba(0,0,0,0.1);
    padding: 2em 0.5em;
    text-align: center;
        img {
            width: 100px;
            border-radius:50%;
            overflow: hidden;
        }
        h2 {
            font-weight:normal;
            margin-bottom:0;
            color: #fff;
            font-size: 16px;
        }
`;

export const UL = styled.ul`
    list-style:none;
    padding:0.5em 0;
    margin:0;
`;

export const LI = styled.li`
    padding: 1em;
    font-size: 1em;
    font-weight: regular;
    transition:all 0.15s linear;
    cursor:pointer;
    &:hover{
        background-color: #fff;
        color: #000;
    }
    &:focus{
        outline:none;
    }
`;