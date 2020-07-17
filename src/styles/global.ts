import { createGlobalStyle } from "styled-components";

//import "react-perfect-scrollbar/dist/css/styles.css";
//import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    *:focus {
      outline: 0;
    }
    html, body {
      height: 100%;
    }
    #root {
      min-height:100%;
    }
    body {
      background:#312E38;
      color:#FFF;
      -webkit-font-smoothing: antialiased;
    }
    body, input, button {
      font: 16px 'Roboto', sans-serif;
    }
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
    }
    buttton {
      cursor: pointer;
    }
    h1,h2,h3,h4,h5,h6,strong{
      font-weight:500px;
    }

    button{
      cursor:pointer;
    }
`;