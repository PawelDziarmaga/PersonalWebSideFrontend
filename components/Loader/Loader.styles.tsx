import styled, { keyframes } from "styled-components";

const circle = keyframes`
	0%{
        top:30vw;
        height:7vw;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
    }
    40%{
        height:9vw;
        border-radius: 50%;
        transform: scaleX(1);
    }
    100%{
        top:0%;
    }

`
const shadow = keyframes`
	  0%{
        transform: scaleX(1.5);
    }
    40%{
        transform: scaleX(1);
        opacity: .7;
    }
    100%{
        transform: scaleX(.2);
        opacity: .4;
    }

`
export const Div = styled.div`
background:radial-gradient(#6db1cd, #bde8fa);
width: 100vw;
height: 100vh;
.wrapper{
    width:50vw;
    position: absolute;
    left:50%;
    top:30%;
    transform: translate(-50%, -50%);
    .circle{
        width:10vw;
        height:10vw;
        position: absolute;
        border-radius: 50%;
        background:radial-gradient(#f6e1d2, #f9c9a9);
        left:0%;
        transform-origin: 50%;
        animation: ${circle} .5s alternate infinite ease;
        &:nth-child(2){
            left:40%;
            animation-delay: .2s;
        }
        &:nth-child(3){
            left:80%;
            right:15%;
            animation-delay: .3s;
        }
    }
    .shadow{
        width:10vw;
        height:1vw;
        border-radius: 50%;
        background-color: rgba(0,0,0,.5);
        position: absolute;
        top:35vw;
        transform-origin: 50%;
        z-index: -1;
        left:0%;
        filter: blur(1px);
        animation: ${shadow} .5s alternate infinite ease;
        &:nth-child(4){
        left: 40%;
        animation-delay: .2s
        }
        &:nth-child(5){
            left:80%;
            right:15%;
            animation-delay: .3s;
        }
    }
    span{
        position: absolute;
        top:35vh;
        
        font-size: 10vw;
        letter-spacing: 1vw;
        color: #fff;
        left:0;
}
}
    
`;

