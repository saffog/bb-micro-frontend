import {http, HttpResponse, PathParams} from 'msw';

import {LoginRequest, LoginResponse} from '../interfaces/Login.interface';
import {SignupRequest, SignupResponse} from '../interfaces/Signup.interface';
import {ForgotPasswordRequest, ForgotPasswordResponse} from '../interfaces/ForgotPassword.interface';
// import {ErrorResponse} from '../interfaces/Error.interface';

export const handlers = [
  http.post<PathParams<string>, LoginRequest, LoginResponse | any >('/login', async ({ request }) => {
    const body = await request.json();

    if (body.email === 'test@gmail.com' && body.password === '123456') {
      return HttpResponse.json(
        {userId: 1, userProfile: 'personal'},
        { status: 201 });
    }

    return new HttpResponse(null, {
      status: 401,
      statusText: 'Failed to authenticate!'
    });
  }),
  http.post<PathParams<string>, SignupRequest, SignupResponse | any>('/signup', async ({ request }) => {
    const body = await request.json();

    if (!!body.email && !!body.name && !!body.password) {
      return HttpResponse.json(
        {userId: 1},
        { status: 200 });
    }

    return new HttpResponse(null, {
      status: 400,
      statusText: `The following fields are required ${!!body.email && 'email '} ${!!body.name && 'nombre '} ${!!body.password && 'contraseña'}`
    });
  }),

  http.post<PathParams<string>, ForgotPasswordRequest, ForgotPasswordResponse | any >('/forgot-password', async ({ request }) => {
    const body = await request.json();

    if (body.email === 'test@gmail.com') {
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