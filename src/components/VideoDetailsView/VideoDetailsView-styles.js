import styled from "styled-components";

export const EverythingContainer = styled.div`
    margin-top: 80px;
    
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const VideoContainerParent = styled.div`    
    float: left;
    width: 65%;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;

    @media screen and (max-width: 600px) {
        width: 90%;
        margin-left: 0px;
    }
`;

export const RelatedVideosParent = styled.div`
    float: left;
    width: 35%;
    text-align: center;
    box-sizing: border-box;
`;

export const VideoPlayerContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%; /*16:9*/
    padding-top: 30px; 
    height: 0; 
    overflow: hidden;
`;



export const ContainerVideoAndInfo = styled.div`
    border-radius: 30px 0px 0px 20px;
    box-shadow: inset 30px 0px 0px 0px ${props => props.theme.lightestPrincipalColor};
    width: 100%;
`;

export const GrandContainerVideo = styled.div`
    padding: 20px;
    background-color: ${props => props.theme.lightPrincipalColor};
    border-radius: 20px;
    width: 100%;
`;

export const VideoTitleStyle = styled.h3`
    background: ${props => props.theme.lightPrincipalColor};
    display: inline-block;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 5px;
    margin-top: 0px;
    margin-left: 40px;
    border-radius: 0 0 15px 15px;
    color: white;
    max-width: 80%;

    @media screen and (max-width: 600px) {
        margin-left: 10px;
        margin-bottom: 0px;
    }
`;

export const VideoDescriptionStyle = styled.p`
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    padding: 10px;
    font-size: medium;
    background-color: ${props => props.theme.lightestPrincipalColor};
    border-radius: 15px 10px 20px 10px;
`;