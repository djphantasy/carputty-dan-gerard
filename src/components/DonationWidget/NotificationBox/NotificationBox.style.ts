import styled from 'styled-components';

export const NeededNotification = styled.aside `
    font-size: 18px;
    color: #3e62b5;
    background-color: #e4ebfd;
    padding: 10px 15px;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;

    sup {
        font-weight: bold;
    }

    ::after {
        content: " ";
        position: absolute;
        top: 10%;
        left: 100%; /* To the right of the tooltip */
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent rgb(60, 0, 0);
    }
`

export const FundedNotification = styled.aside `
    font-size: 18px;
    color: white;
    background-color: rgba(28,203,161,1);
    padding: 10px 15px;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;

    sup {
        font-weight: bold;
    }
`