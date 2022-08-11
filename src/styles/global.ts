import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }

  html {
    font-size: 100%;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 640px) {
    html {
      font-size: 81.25%;
    }
  }

  body {
    background: #fff;
    color: #303030;
  }

  html, body {
    /* -ms-overflow-style: none;
    scrollbar-width: none;
    overscroll-behavior: none;

    &::-webkit-scrollbar {
      display: none;
    } */
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    & > div {
      height: 100%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body, input, textarea, select, button, h1, h2, h3, h4, h5, span, strong, p {
    font: 500 1rem 'Poppins', sans-serif;
    letter-spacing: 0.03rem;
    color: #303030;
  }

  a, button, input {
    border: none;
    background: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a, button {
    cursor: pointer;
  }
`;