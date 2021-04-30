//Core
import { createGlobalStyle } from "styled-components";

const size = {
  mobileP: "320px",
  mobileL: "480px",
  tabletP: "768px",
  tabletL: "1024px",
  desktopM: "1280px",
  desktopL: "1480px",
};

export const device = {
  mobileP: `screen and (min-width: ${size.mobileP})`,
  mobileL: `screen and (min-width: ${size.mobileL})`,
  tabletP: `screen and (min-width: ${size.tabletP})`,
  tabletL: `screen and (min-width: ${size.tabletL})`,
  desktopM: `screen and (min-width: ${size.desktopM})`,
  desktopL: `screen and (min-width: ${size.desktopL})`,
};

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Tahoma', sans-serif;
    }

    body {
        width: 100%;
        min-height: 100vh;
    }

    input {
        &::placeholder {
            font: inherit;
            color: #9B9FAA;
        }

        &::-webkit-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &::-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-ms-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:focus::-webkit-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus::-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-ms-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyle;
