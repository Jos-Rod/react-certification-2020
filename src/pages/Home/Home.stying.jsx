import styled from 'styled-components';
// .homepage {
//   text-align: center;
// }

// .homepage h1 {
//   font-size: 3rem;
//   letter-spacing: -2px;
// }

export const WrapperVideos = styled.div`
  display: inline;
  text-align: center;
  width: ${(props) => props.cardListWidth};
`;

export const WrapperChannels = styled.div`
  display: inline;
  width: 30%;
`;
