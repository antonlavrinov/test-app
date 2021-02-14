import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"



export const Container = styled.div`
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    @media only screen and (min-width: 1225px) {
        width: 1200px;
    }

`


export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
      background: var(--background-dark-blue);
      color: var(--white);
      overflow-x: hidden;
  }

  * {
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
    --blue: #1F8EFA;
    --background-dark-blue: #101B31;
    --dark: #081022;
    --pale-blue: #1C2841;
    --pale-text: #54617A;
    --white: #fefefe;
  }

  input, input:hover, input:active, input:focus {
    outline: none;
  }
  
  img {
    align-self: start;
  }

  h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
      line-height: 1;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  
  ul, li {
    display: block;
    padding: 0;
    margin: 0;
  }
  
  
  a, a:hover {
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    font-size: inherit;
  }
  
  button {
    border: none;
  }
  
  button:focus {
    outline: none;
  }
  

  .swiper-slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  }

  .swiper-container {
    height: 100%;
    width: 100%;
  }

  


  #nprogress .bar {
    height: 4px;
    background: var(--blue);
  }

  #nprogress .spinner-icon {
    height: 40px;
    width: 40px;
    border: solid 4px transparent;
    border-top-color: var(--blue);
    border-left-color: var(--blue);

  }

`;