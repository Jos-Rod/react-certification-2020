import styled from 'styled-components';

export const SearchButtonStyle = styled.button`
  border-radius: 1px 15px 15px 1px; /* Adds curve to border corners */
  border: 0px;
  text-transform: uppercase; /* Make letters uppercase */
  padding: 14px 32px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  color: black;
  background-color: rgb(255, 255, 224);
  /* box-shadow: 0 8px 10px 0 rgba(0, 0, 0 , .1); */
  transition-duration: 0.4s;
  outline: none;

  &:hover {
    border-radius: 1px 15px 15px 1px; /* Adds curve to border corners */
    border: 0px;
    text-transform: uppercase; /* Make letters uppercase */
    padding: 14px 45px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: white;
    background-color: ${(props) => props.theme.backgroundPrincipalColor};
    box-shadow: 0 20px 15px 0 rgba(0, 0, 0, 0.1);
    outline: none;
  }
`;

export const SizeOfInput = styled.div`
  width: 400px;
  margin-right: 4px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
