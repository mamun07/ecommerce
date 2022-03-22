import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    *{
        // global color...
        --dark: #14274E;
        --dark2: #394867;
        --white: #ffffff;
        --white2: #F1F6F9;
        --white3: #9BA4B4;
        --orange: #D65A31;

        // global padding...
        --p1: 10px 0;
        --p2: 20px 0;
        --p3: 30px 0;
        --p5: 50px 0;
        --p8: 80px 0;

        // global margin...
        --m3: 30px 0;
        --m5: 50px 0;
        --m8: 80px 0;

        // global font...
        --normal: 'Open Sans', sans-serif;
        --title: 'Montserrat', sans-serif;

    }
    body {
        margin: 0px;
        padding: 0px;
        background: var(--white);
        color: var(--dark);
        font-family: var(--normal);
    }
    h1,h2,h3,h4,h5,h6{
        font-weight: 400;
        font-family: var(--title);
    }
    h6{
        font-size: 20px;
        font-weight: 400;
    }
    p,
    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        font-weight: 400;
        margin: 0px;
        padding: 0px;
    }
    a{
        color: var(--orange);
    }
    input:focus,
    textarea:focus{
        border-color: var(--orange) !important;
        box-shadow: none !important;
    }
    
`;
