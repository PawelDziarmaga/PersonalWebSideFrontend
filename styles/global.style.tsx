import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
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
export const Div = styled.div`
	scroll-behavior: smooth;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	height: 100vh;
	div {
		scroll-snap-align: start;
	}
	&.noScroll {
		overflow-y: hidden;
	}
`;
/*
font-family: 'Baloo 2', cursive;
font-family: 'Caveat', cursive;
*/
