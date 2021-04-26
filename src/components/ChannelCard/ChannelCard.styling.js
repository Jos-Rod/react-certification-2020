import styled from 'styled-components';

export const FatherChannelCard = styled.div`
    background-color: white;
    width: 80%;
    max-width: 290px;
    margin: 20px;
    padding: 5px;
    border-radius: 0px 30px 30px 0px;
    box-shadow: 14px 0px 6px -4px rgba(0, 0, 0 , .1);

    &:hover {
        background-color: ${props => props.currentTheme.hoverBackgroundColor}
    }

    @media screen and (max-width: 800px) {
      width: 100%;
    }
`;

export const ChannelImage = styled.div`
    background-image: ${props => props.imgSrc};
    width: 70pt;
    height: 70pt;
    background-size: cover;
    border-radius: 50%;
    background-repeat: no-repeat;
    display: inline;
`;