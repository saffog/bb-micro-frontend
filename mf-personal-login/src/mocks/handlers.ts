import {http, HttpResponse, PathParams} from 'msw';

import {LoginRequest} from '../interfaces/Login.interface';
import {SignupRequest} from '../interfaces/Signup.interface';
import {ForgotPasswordRequest} from '../interfaces/ForgotPassword.interface';
import {USERS_DATA} from '../services/users';

export const handlers = [
  http.post<PathParams<string>, LoginRequest >('/login-person', async ({ request }) => {
    const body = await request.json();

    const foundUser = USERS_DATA.find((user) => user.email === body.email && user.password === body.password);

    if (foundUser) {
      const { password, ...rest } = foundUser;
      return HttpResponse.json(
        {...rest},
        { status: 201 });
    }

    return new HttpResponse(null, {
      status: 401,
      statusText: 'Failed to authenticate!'
    });
  }),
  http.post<PathParams<string>, SignupRequest>('/signup-person', async ({ request }) => {
    const body = await request.json();

    if (!!body.email && !!body.name && !!body.password) {
      return HttpResponse.json(
        {userId: 5},
        { status: 200 });
    }

    return new HttpResponse(null, {
      status: 400,
      statusText: `The following fields are required ${!!body.email && 'email '} ${!!body.name && 'nombre '} ${!!body.password && 'contraseña'}`
    });
  }),

  http.post<PathParams<string>, ForgotPasswordRequest >('/forgot-password-person', async ({ request }) => {
    const body = await request.json();

    const foundUser = USERS_DATA.find((user) => user.email === body.email);

    if (foundUser) {
      return HttpResponse.json(
        {statusMessage: 'A password email was sent to your email'},
        { status: 201 });
    }

    return new HttpResponse(null, {
      status: 400,
      statusText: 'The email was not found'
    });
  }),
];