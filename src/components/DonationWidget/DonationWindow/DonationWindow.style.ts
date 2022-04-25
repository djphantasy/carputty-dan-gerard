import styled from 'styled-components';

export const WindowContainer = styled.section `
    border-radius: 10px;
    border: 1px solid lightgray;
    box-shadow: 0 0 15px 0px lightgray;

    article {
        padding: 20px 40px;
    }

    h1 {
        text-align: left;
        font-size: 30px;
    }

    p {
        text-align: left;
        font-size: 20px;
    }

    form {
        display: flex;
        margin: 40px 0 30px 0;
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
        float: left;
        height: 70px;
        align-items: center;
        justify-content: center;
        width: 40px;
        color: gray;
        font-size: 20px;
        box-sizing: border-box;
        margin-top: -3px;
    }

    form input {
        height: 70px;
        box-sizing: border-box;
        width: 100%;
        padding: 0 30px;
        font-size: 20px;
        font-weight: bold;
        vertical-align: baseline;
        border-radius: 7px 0 0 7px;
        border: 1px solid lightgray;
    }

    form button {
        height: 70px;
        width: 33.3%;
        border: none;
        border-radius: 0 7px 7px 0;
        font-size: 20px;
        font-weight: 600;
        color: white;
        background-color: rgb(28,203,161);
    }
`