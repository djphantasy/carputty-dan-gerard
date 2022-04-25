import styled from 'styled-components';

export const NotificationContainer = styled.div`
    font-size: 18px;
    `

export const NeededNotification = styled.aside`
    color: #3e62b5;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    p {
        background-color: #e4ebfd;
        padding: 10px 15px;
        margin: 0;
        border-radius: 5px;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        display: flex;
     }

    sup {
        font-weight: bold;
    }

    ::after {
        clear: both;
        content: " ";
        position: relative;
        top: 5px;
        left: 440px; 
        margin-top: -5px;
        border-width: 15px;
        border-style: solid;
        border-color: #e4ebfd transparent transparent transparent;
    }
    
`

export const FundedNotification = styled.aside`
    color: white;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    p {
        background-color: rgba(28,203,161,1);
        padding: 10px 15px;
        margin: 0;
        border-radius: 5px;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        display: flex;
     }

    sup {
        font-weight: bold;
    }

    ::after {
        clear: both;
        content: " ";
        position: relative;
        top: 5px;
        left: 440px; 
        margin-top: -5px;
        border-width: 15px;
        border-style: solid;
        border-color: rgba(28,203,161,1) transparent transparent transparent;
    }
`

//rgba(28,203,161,1);