 import { createGlobalStyle } from "styled-components";
 import reset from "styled-reset";
 
 const globalStyles = createGlobalStyle`
     ${reset};
     @font-face {
        font-family: 'SUITE-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
    font-family: 'IM_Hyemin-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2') format('woff');
    font-weight: normal;
    font-style: normal;
}
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
        font-family: 'IM_Hyemin-Bold';
        box-sizing:border-box;
     }
     body{
        font-family: 'IM_Hyemin-Bold';
         font-size: 14px;
         background-color:rgba(255,255,255,1);
     }
 `;

 export default globalStyles;