import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { ButtonHome } from '../NavBar/NavBar-styling';
import NiceInput from '../NiceInput/NiceInput.component';
import { Modal, ModalStructure } from './ModalLogin.styling';

const ModalLogin = ({ theme }) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    document.createElement('div');

    // value, handleOnChange
    function handleLoginButtonClick() {
        console.log(`email: ${email} | pass: ${password}`);
    }

    return ReactDOM.createPortal(<Modal>
        <ModalStructure theme={theme}>
            <h4>Login</h4>
            <div style={{ paddingLeft:"50px", paddingRight:"50px" }}>
                <NiceInput placeholder="email" withLabel="email" value={email} setValue={setEmail} ></NiceInput>
                <NiceInput placeholder="password" withLabel="password" 
                    isPassword={true} value={password} setValue={setPassword} ></NiceInput>
                <ButtonHome style={{ marginTop: "20px", }} theme={theme} onClick={handleLoginButtonClick}>Sign in</ButtonHome>
            </div>
        </ModalStructure>
    </Modal>, document.getElementById('modallogin')); 
}

export default ModalLogin;