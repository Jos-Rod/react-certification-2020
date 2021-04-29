import React, { useState } from 'react';
import loginApi from '../../login.api';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import { ButtonHome, ButtonHoverItem } from '../NavBar/NavBar-styling';
import NiceInput from '../NiceInput/NiceInput.component';
import { Modal, ModalStructure } from './ModalLogin.styling';

const ModalLogin = ({ theme }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);

  const { showOrHideModalLogin } = useSiteInfo();
  const { login, logout, authenticated } = useAuth();

  document.createElement('div');

  // value, handleOnChange
  async function handleLoginButtonClick() {
    loginApi(username, password)
      .then((res) => {
        setErrorLogin(false);
        // store user on local storage
        login(res);
        // empty fields
        setUsername('');
        setPassword('');
        // close modal
        showOrHideModalLogin();
      })
      .catch((err) => {
        setErrorLogin(true);
        console.log(err);
        logout();
      });
  }

  function handleLogoutButtonClick() {
    logout();
    showOrHideModalLogin();
  }

  return (
    <Modal>
      <ModalStructure theme={theme}>
        <div style={{ textAlign: 'right' }}>
          <ButtonHoverItem
            style={{ fontWeight: '800', marginRight: '20px' }}
            onClick={showOrHideModalLogin}
          >
            X
          </ButtonHoverItem>
        </div>
        <h2 style={{ margin: '0px' }}>{authenticated ? 'Log out' : 'Login'}</h2>
        {/* { authenticated ? <LoginContent/> : <LogoutContent /> } */}
        {!authenticated ? (
          <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
            <NiceInput
              placeholder="username"
              withLabel="username"
              value={username}
              setValue={setUsername}
              aria-label="email-input"
            />
            <NiceInput
              placeholder="password"
              withLabel="password"
              isPassword
              value={password}
              setValue={setPassword}
            />
            {errorLogin ? (
              <p
                style={{
                  color: 'red',
                  fontSize: 'small',
                  marginTop: '10px',
                  fontWeight: '700',
                }}
              >
                Invalid credentials
              </p>
            ) : (
              <></>
            )}
            <ButtonHome
              style={{ marginTop: !errorLogin ? '20px' : '0px' }}
              theme={theme}
              onClick={handleLoginButtonClick}
            >
              Sign in
            </ButtonHome>
          </div>
        ) : (
          <div
            style={{
              paddingLeft: '50px',
              paddingRight: '50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>You are logged in.</p>
            <ButtonHome
              style={{ marginTop: '20px' }}
              theme={theme}
              onClick={handleLogoutButtonClick}
            >
              Sign out
            </ButtonHome>
          </div>
        )}
      </ModalStructure>
    </Modal>
  );
};

export default ModalLogin;
