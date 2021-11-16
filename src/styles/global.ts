import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-blue: #5429CC;
        --color-blue-ligth: #6933FF;
        --color-green: #33CC95;
        --color-red: #E52E4D;

        --color-text-primary: #363F5F;
        --color-text-secondary: #969CB2;

        --background: #F0F2F5;
        --white: #fff;
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }
`