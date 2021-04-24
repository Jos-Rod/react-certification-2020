import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import loginApi from '../../login.api';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import { ButtonHome, ButtonHoverItem } from '../NavBar/NavBar-styling';
import NiceInput from '../NiceInput/NiceInput.component';
import { Modal, ModalStructure } from './ModalLogin.styling';

const ModalLogin = ({ theme }) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);

    const { showOrHideModalLogin } = useSiteInfo();
    const { login, logout, authenticated } = useAuth();

    document.createElement('div');

    // value, handleOnChange
    async function handleLoginButtonClick() {

        loginApi(email, password).then((res) => {
            setErrorLogin(false);
            // store user on local storage
            login(res);
            // empty fields
            setEmail('');
            setPassword('');
            // close modal
            showOrHideModalLogin();
            console.log("Now the login is");
            console.log(authenticated);
        }).catch(err => {
            setErrorLogin(true);
            logout();
        });

    }

    return ReactDOM.createPortal(<Modal>
        <ModalStructure theme={theme}>
            <div style={{textAlign: 'right'}}>
                <ButtonHoverItem style={{ color: "red" }} onClick={showOrHideModalLogin}>X</ButtonHoverItem>
            </div>
            <h2 style={{ margin: "0px", }}>Login</h2>
            <div style={{ paddingLeft:"50px", paddingRight:"50px" }}>
                <NiceInput placeholder="email" withLabel="email" value={email} setValue={setEmail} ></NiceInput>
                <NiceInput placeholder="password" withLabel="password" 
                    isPassword={true} value={password} setValue={setPassword} ></NiceInput>
                { errorLogin ? <p style={{ color: "red", fontSize: "small", marginTop: "10px", fontWeight: "700" }}>Invalid credentials</p> : <></> }
                <ButtonHome style={{ marginTop: !errorLogin ? "20px" : "0px", }} theme={theme} onClick={handleLoginButtonClick}>Sign in</ButtonHome>
            </div>
        </ModalStructure>
    </Modal>, document.getElementById('modallogin')); 
}

export default ModalLogin;