import styled from 'styled-components';

export const BackgroundBar = styled.div `
    background-color: #b5f1e5;
    border-radius: 10px 10px 0 0;
    height: 20px;
`;

export const ForegroundBar = styled.div`
  background: linear-gradient(90deg, rgba(28,203,161,1) 0%, rgba(28,203,161,1) ${props => props.totalDonation}%, rgba(28,203,161,0) ${props => props.totalDonation + 0.5}%);
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;
