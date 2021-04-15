import styled from "styled-components";


export const VideoCardStyled = styled.div`
    ${props => props.cardStyle != "horizontal" ? 
    `{
      background-color: white;
      width: 15rem;
      margin: 10px;
      border-radius: 10px;
      overflow: hidden;
      transition-duration: 0.05s;
      display: inline-block;
      height: 18rem;
      max-height: 20rem;
      box-shadow: 0 5px 3px 0 rgba(0, 0, 0 , .1);
    };` : 
    `{
      background-color: white;
      width: 23rem;
      margin: 20px;
      border-radius: 10px;
      overflow: hidden;
      transition-duration: 0.05s;
      display: flex;
      height: 7rem;
      max-height: 11rem;
      box-shadow: 0 5px 3px 0 rgba(0, 0, 0 , .1);
      align-items: center;
  }`
    }
    &:hover {
      background-color: ${props => props.theme.hoverBackgroundColor};
      width: ${props => props.cardStyle != "horizontal" ? '15rem' : null};
      margin: 10px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0 , .1);
    } 
  `;

export const TitleCard = styled.p`{
  ${props => props.cardStyle != "horizontal" ?
    `
    font-size: large;
    margin-bottom: 0px;
    margin-top: 0px;
    `:
    `
    font-size: small;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    `
}`;

export const DescripctionCard = styled.p`{
  ${props => props.cardStyle != "horizontal" ? 
  `  
    margin-top: 0px;
    font-size: 14px;
    color: gray;
    ` :
    `
    margin-top: 0px;
    font-size: small;
    color: gray;
    text-overflow: ellipsis;
    height: 3em;
    `
}`;

export const Thumbnail = styled.div`
  background-image: ${props => props.imgSource};
  ${props => props.cardStyle != "horizontal" ?
  `
    width: 100%;
    height: 8rem;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 0px;
    background-position: center;
    ` :
    `
    width: 55%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 0px;
    background-position: center;
    display: inline-block;
    `}
    `;

export const VideoInfo = styled.div`{
  ${props => props.cardStyle != "horizontal" ?
  `  
    margin: 9px;
    text-align: left;
    `:
    `
    text-align: left;
    display: inline-block;
    width: 45%;
    padding: 5px;
    height: 100%;
    `
}`;
