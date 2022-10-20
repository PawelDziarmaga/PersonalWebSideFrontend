import styled, { keyframes } from "styled-components";

import { motion } from "framer-motion";

const circle = keyframes`
	0%{
        top: 0vh;
        height:7vw;
        border-radius: 50px 50px 25px 25px;

    }
    40%{
        height:9vw;
        border-radius: 50%;

    }
    100%{
        top:-20vh;
    }

`
const shadow = keyframes`
	  0%{
        transform: scaleX(.8);
        opacity: 1;
    }
    40%{
        transform: scaleX(1);
        opacity: .7;
    }
    100%{
        transform: scaleX(1.2);
        opacity: .4;
    }

`
export const Div = styled(motion.div)`
    background:radial-gradient(#fffbde, #fbf9f0);
    width: 100%;
    height: 100vh;
    padding-top: 20vh;
    p{
   
        text-align:center ;
        font-size: 10vw;
        letter-spacing: 1vw;
        color: var(--fontColor);
        
}
    
`;
export const Circles = styled.div`
    width: 100%;
    height: 37%;
    display: flex;
    justify-content: space-around;
`
export const Shadows = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
`
export const Circle = styled.div`
        align-self:flex-end;
        width:10vw;
        height:10vw;
        position: relative;
        border-radius: 50%;
        background:radial-gradient(#f6e1d2, #f9c9a9);
       
        animation: ${circle} .6s alternate infinite ease;
        &:nth-child(2){
            animation-delay: .3s;
        }
        &:nth-child(3){
           
            animation-delay: .6s;
        }
    
`
export const Shadow = styled.div`
        width:10vw;
        height:1vw;
        border-radius: 50%;
        background-color: rgba(0,0,0,.5);
        
    
        left:0%;
        filter: blur(1px);
        animation: ${shadow} .6s alternate infinite ease;

        &:nth-child(2){
           
            animation-delay: .3s
        }
        &:nth-child(3){
           
            animation-delay: .6s;
        }
`
