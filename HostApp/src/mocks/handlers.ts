import {http, HttpResponse, PathParams} from 'msw';

import {ForgotPasswordRequest, LoginRequest, SignupRequest} from '../interfaces/request.interface';
import {USERS_DATA, COMPANY_DATA} from '../services/users';

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

  http.post("/login", async ({ request }) => {
    const requestBody: LoginRequest | undefined =
      (await request.json()) as LoginRequest;
    const userEmail = requestBody?.email;
    const password = requestBody.password;

    const validUser = COMPANY_DATA
      .find((user) => user.email === userEmail && user.password === password) || null;

    if (validUser === null) {
      return new HttpResponse(null, {
        status: 401,
        statusText: "Unauthorized",
      });
    } else {
      return HttpResponse.json({
        userId: validUser.userId,
        accountType: "ENTERPRISE",
        userName: validUser.userName,
      });
    }
  }),

  http.post("/password-recovery", async ({ request }) => {
    const requestBody: ForgotPasswordRequest | undefined =
      (await request.json()) as ForgotPasswordRequest;
    const userEmail = requestBody.email;
    return HttpResponse.json({
      userEmail: userEmail,
    });
  }),

  http.post("/companies", async ({ request }) => {
    const requestBody: SignupRequest | undefined =
      (await request.json()) as SignupRequest;
    const userName = requestBody.name;
    const userEmail = requestBody.email;
    return HttpResponse.json({
      userName: userName,
      userEmail: userEmail,
    });
  }),
];