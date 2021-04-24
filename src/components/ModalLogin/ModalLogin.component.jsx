import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ButtonHome } from '../NavBar/NavBar-styling';
import NiceInput from '../NiceInput/NiceInput.component';
import { Modal, ModalStructure } from './ModalLogin.styling';

const ModalLogin = ({ theme }) =>  {

    document.createElement('div');

    return ReactDOM.createPortal(<Modal>
        <ModalStructure theme={theme}>
            <h4>Login</h4>
            <div style={{ paddingLeft:"50px", paddingRight:"50px" }}>
                <NiceInput placeholder="email" withLabel="email" ></NiceInput>
                <NiceInput placeholder="password" withLabel="password" isPassword={true} ></NiceInput>
                <ButtonHome style={{ marginTop: "20px", }} theme={theme}>Sign in</ButtonHome>
            </div>
        </ModalStructure>
    </Modal>, document.getElementById('modallogin'));
}

export default ModalLogin;