/* eslint-disable no-undef */
import {
  fireEvent, cleanup, render, waitFor,
} from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { Login, Register } from '../src/screens';
import { Store } from '../src/store';

describe('Auth Register and Login', () => {
  const mockOnPress = jest.fn();

  const userData = {
    email: 'coba2@gmail.com',
    password: 'Cobacoba1!',
  };

  const dataRegister = {
    email: 'coba30@gmail.com',
    password: 'Cobacoba1!',
  };
  afterEach(cleanup);

  it('should render LoginScreen', () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Login />
      </Provider>,
    );
    expect(getByTestId('login-screen')).toBeTruthy();
  });

  it('should render RegisterScreen', () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Register />
      </Provider>,
    );
    expect(getByTestId('register-screen')).toBeTruthy();
  });

  it('can login with email and password', async () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Login navigation={mockOnPress} />
      </Provider>,
    );
    await fireEvent.changeText(getByTestId('email'), userData.email);
    await fireEvent.changeText(getByTestId('password'), userData.password);
    await fireEvent.press(getByTestId('login'));

    const loginState = Store.getState();
    const { isLoggedIn } = loginState.dataLogin;
    waitFor(() => expect(isLoggedIn).toBe(true));
  });

  it('can register with email and password', async () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Register navigation={mockOnPress} />
      </Provider>,
    );
    await fireEvent.changeText(getByTestId('email'), dataRegister.email);
    await fireEvent.changeText(getByTestId('password'), dataRegister.password);
    await fireEvent.press(getByTestId('register'));

    const registerState = Store.getState();
    const { isSuccess } = registerState.dataRegister;
    waitFor(() => expect(isSuccess).toBe(true));
  });
});