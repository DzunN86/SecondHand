import React from 'react';
import Login from '../Login';
import {render} from '@testing-library/react-native'


test('login screen', () => {

  it('should go to home page on login', () => {
    const page = render(<Login />);

    const loginButton = page.getByTestId('btn-login');

    // fireEvent.press(loginButton)

    // expect(false).toBeTruthy();
  })

})