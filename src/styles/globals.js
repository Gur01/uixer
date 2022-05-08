import { createGlobalStyle } from 'styled-components';
import { colors } from '@/constants'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Mont';
        src: url('../../fonts/Mont-Regular.eot');
        src: url('../../fonts/Mont-Regular.eot?#iefix') format('embedded-opentype'),
            url('../../fonts/Mont-Regular.woff2') format('woff2'),
            url('../../fonts/Mont-Regular.woff') format('woff'),
            url('../../fonts/Mont-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Mont';
        src: url('../../fonts/Mont-Bold.eot');
        src: url('../../fonts/Mont-Bold.eot?#iefix') format('embedded-opentype'),
            url('../../fonts/Mont-Bold.woff2') format('woff2'),
            url('../../fonts/Mont-Bold.woff') format('woff'),
            url('../../fonts/Mont-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Mont';
        src: url('../../fonts/Mont-SemiBold.eot');
        src: url('../../fonts/Mont-SemiBold.eot?#iefix') format('embedded-opentype'),
            url('../../fonts/Mont-SemiBold.woff2') format('woff2'),
            url('../../fonts/Mont-SemiBold.woff') format('woff'),
            url('../../fonts/Mont-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('../../fonts/DMSans-Regular.eot');
        src: url('../../fonts/DMSans-Regular.eot?#iefix') format('embedded-opentype'),
            url('../../fonts/DMSans-Regular.woff2') format('woff2'),
            url('../../fonts/DMSans-Regular.woff') format('woff'),
            url('../../fonts/DMSans-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Mont, sans-serif;
        font-size: 20px;
        font-weight: 400;
        background-color: ${colors.lightGray}
    }

    a {
        text-decoration: none;
        color: ${colors.black};
        font-size: 0.7rem;
    }

    * {
        box-sizing: border-box;
        /* font-family: inherit; */
    }

    p {
        font-size: 0.7rem;
        font-weight: normal;
        line-height: 21px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    h1,
    h2,
    h3 {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    ul {
        padding: 0;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;
    }

    * {
        scrollbar-width: auto;
        scrollbar-color: #808080 #ffffff;
    }

    * {
        scrollbar-width: auto;
        scrollbar-color: #c5c5c5 #ffffff;
    }

    *::-webkit-scrollbar {
        width: 16px;
    }

    *::-webkit-scrollbar-track {
        background: #ffffff;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #c5c5c5;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
    }

`

export default GlobalStyle;

