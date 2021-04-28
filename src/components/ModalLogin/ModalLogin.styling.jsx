import styled from 'styled-components';

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModalStructure = styled.div`
  background-color: ${(props) => props.theme.lightestPrincipalColor};
  width: 30%;
  height: 350px;
  /* min-height: 30vh; */
  border-radius: 20px;
  border-width: 10px;
  border-color: ${(props) => props.theme.backgroundPrincipalColor};

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;
