import styled from 'styled-components';

export const WindowContainer = styled.section `
    margin-top: 0px;
    border-radius: 10px;
    border: 1px solid lightgray;
    box-shadow: 0 0 15px 0px lightgray;
    background-color: white;

    article {
        padding: 45px 40px;
    }

    h1 {
        text-align: left;
        font-size: 30px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        margin: 0;
        line-height: 1.4;
    }

    p {
        text-align: left;
        font-size: 20px;
        font-family: 'IBM Plex Sans', sans-serif;
        line-height: 1.2;
        color: #555;
        font-weight: 500;
        margin: 20px 0 45px 0;
    }

    form {
        font-family: 'IBM Plex Sans', sans-serif;
        display: flex;
    }

    form div {
        width: 66.7%;
    }

    form label {
        position: absolute;
        float: left;
        color: gray;
        margin-top: -10px;
        margin-left: 10px;
        background-color: white;
        padding: 0 5px;
        font-size: 14px;
    }

    form span {
        display: flex;
        position: absolute;
        height: 70px;
        align-items: center;
        justify-content: center;
        width: 50px;
        color: gray;
        font-size: 30px;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;
    }

    form input {
        font-family: 'IBM Plex Sans', sans-serif;
        height: 70px;
        box-sizing: border-box;
        width: 100%;
        padding: 0 5px 0 40px;
        font-size: 30px;
        font-weight: bold;
        vertical-align: baseline;
        border-radius: 7px 0 0 7px;
        border: 1px solid lightgray;
    }

    form input:focus {
        box-shadow: 0 0 15px rgb(28,203,161);
    }

    form input:active {
        box-shadow: 0 0 15px rgb(28,203,161);
    }

    form button {
        height: 70px;
        width: 33.3%;
        border: none;
        border-radius: 0 7px 7px 0;
        font-size: 22px;
        font-weight: 600;
        color: white;
        background-color: rgb(28,203,161);
        cursor: pointer;
        box-sizing: border-box;
        transition-property: background-color, color, border, box-shadow;
        transition-duration: 0.5s;
    }

    form button:hover {
        background-color: green;
        color: white;
        box-shadow: 0 0 15px green;
    }

    .invalid {
        color: red;
        font-size: 16px;
        margin: 10px 0 -25px 0;
    }
`