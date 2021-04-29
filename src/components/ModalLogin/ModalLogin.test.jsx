import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ModalLogin from './ModalLogin.component';
import AuthProvider from '../../providers/Auth/Auth.provider';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';

const setup = () => {
  render(
    <AuthProvider>
      <SiteInfoProvider>
        <ModalLogin />
      </SiteInfoProvider>
    </AuthProvider>
  );
};

test('sign in button exists', () => {
  setup();

  const buttonLogin = screen.getByText(/Sign in/i, { selector: 'button' });
  expect(buttonLogin).toBeInTheDocument();
});

test('Login title exists', () => {
  setup();

  const title = screen.getByText(/Login/i);
  expect(title).toBeInTheDocument();
});

test('username and password labels for inputs exists', () => {
  setup();

  const emailLabel = screen.getByText(/username:/i);
  const passwordLabel = screen.getByText(/password:/i);
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});

test('Message of invalid credentials not showing', () => {
  setup();

  const title = screen.queryByText(/Invalid credentials/i);
  expect(title).not.toBeInTheDocument();
});

test('Inputs correct behavior of writing.', () => {
  setup();
  const inputUsername = screen.getByPlaceholderText('username');
  const inputPassword = screen.getByPlaceholderText('password');

  fireEvent.change(inputUsername, { target: { value: 'hello' } });
  fireEvent.change(inputPassword, { target: { value: 'world' } });

  expect(inputUsername.value).toBe('hello');
  expect(inputPassword.value).toBe('world');
});

test('Button to close modal showing', async () => {
  setup();

  const buttonClose = screen.getByText(/X/i, { selector: 'button' });
  expect(buttonClose).toBeInTheDocument();
});

test('Wrong credentials label show when invalid credentials.', async () => {
  setup();
  const inputUsername = screen.getByPlaceholderText('username');
  const inputPassword = screen.getByPlaceholderText('password');

  fireEvent.change(inputUsername, { target: { value: 'hello' } });
  fireEvent.change(inputPassword, { target: { value: 'world' } });

  const buttonLogin = screen.getByText(/Sign in/i, { selector: 'button' });
  fireEvent.click(buttonLogin);
  await waitFor(() =>
    expect(screen.queryByText(/Invalid credentials/i)).toBeInTheDocument()
  );
  const buttonLoginAfterTryingToLogin = screen.getByText(/Sign in/i, {
    selector: 'button',
  });
  expect(buttonLoginAfterTryingToLogin).toBeInTheDocument();
});
// version anterior de react-scripts 3.4.3 4.0.1

test('Correct behavior when user logs in with correct credentials, and logs out', async () => {
  setup();
  const inputUsername = screen.getByPlaceholderText('username');
  const inputPassword = screen.getByPlaceholderText('password');

  fireEvent.change(inputUsername, { target: { value: 'hi' } });
  fireEvent.change(inputPassword, { target: { value: '123' } });

  const buttonLogin = screen.getByText(/Sign in/i, { selector: 'button' });
  expect(buttonLogin).toBeInTheDocument();
  fireEvent.click(buttonLogin);
  await waitFor(() => expect(screen.queryByText(/Log out/i)).toBeInTheDocument());
  expect(inputEmail).not.toBeInTheDocument();
  expect(inputPassword).not.toBeInTheDocument();
  const messageWhenLoggedIn = screen.getByText(/You are logged in./i);
  expect(messageWhenLoggedIn).toBeInTheDocument();
  const buttonLogout = screen.getByText(/Sign out/i, { selector: 'button' });
  expect(buttonLogout).toBeInTheDocument();
  fireEvent.click(buttonLogout);
  const buttonLogin2 = screen.getByText(/Sign in/i, { selector: 'button' });
  expect(buttonLogin2).toBeInTheDocument();
});
