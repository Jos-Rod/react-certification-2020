import styled from 'styled-components';

export const NavBarStyled = styled.div`
{
  position: absolute;
  top: 0;
  margin-bottom: 10px;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0 , .1);
  background-color: ${props => props.theme.backgroundPrincipalColor};
}
`;
export const ButtonHome = styled.button`
{
background-color: white;
color: ${props => props.theme.backgroundPrincipalColor};
border-style: none;
padding: 10px;
font-weight: 800;
letter-spacing: 2px;
border-radius: 10px 15px 10px 15px;
transition-duration: 0.4s;
margin-left: 30px;
font-size: large;
outline: none;
};

&:hover {
margin-left: 30px;
font-size: large;
background-color: transparent;
color: white;
border-style: none;
padding: 10px;
font-weight: 800;
letter-spacing: 2.8px;
border-radius: 10px 15px 10px 15px;
cursor: pointer;
outline: none;
}
`;
export const ButtonHoverItem = styled.button`
{
display: 'inline';
background-color: transparent;
border: 0;
outline: none;
transition-duration: 0.4s;
border-radius: 30px;
margin-right: 10px;
}
&:hover {
display: 'inline';
background-color: ${props => props.theme.backgroundPrincipalColor};
border: 0;
outline: none;
border-radius: 30px;
box-shadow: 0 20px 15px 0 rgba(0, 0, 0 , .1);
}
`;