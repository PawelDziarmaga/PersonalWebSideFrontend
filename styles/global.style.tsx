import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    @import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&family=Caveat:wght@400;500;700&display=swap");

    margin: 0;
	background: #f4f9f9;
    font-family: 'Baloo 2', cursive;

    --secondary: #5590c8;

}
h2{
    font-size: 1.2 rem;
    color: var(--primary)
}
h2{
    font-size: 1 rem;
    color: var(--secondary)
}
a{
    color: black;
    text-decoration: none;
}
p{
    line-height:150%
    }
    main{
      
        padding-top: 84px;
        min-height: 70vh;
        @media (min-width: 950px) {
            padding-top:122px;
	}
    }
`;
export const Div = styled(motion.div)`
	scroll-behavior: smooth;

	overflow-y: scroll;
	height: 100vh;

`;
/*
font-family: 'Baloo 2', cursive;
font-family: 'Caveat', cursive;
*/
