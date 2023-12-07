import {http, HttpResponse, PathParams} from 'msw';

import {ForgotPasswordRequest, LoginRequest, SignupRequest} from '../interfaces/request.interface';
import {TypeUserSData} from '../services/users';
import {useSessionStorage} from '../hooks/useSessionStorage';

export const handlers = [
  http.post<PathParams<string>, LoginRequest >('/login-person', async ({ request }) => {
    const body = await request.json();
    const [getSessionStorage] = useSessionStorage<TypeUserSData[]>('users');
    const arrayUsers = getSessionStorage() ?? [];

    const hasUser = arrayUsers.find((user) => user.email === body.email && user.password === body.password);

    if (hasUser) {
      const { password, ...rest } = hasUser;
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
    const [getSessionStorage, setSessionStorage] = useSessionStorage<TypeUserSData[]>('users');

    if (!!body.email && !!body.name && !!body.password) {
      const currentUser: TypeUserSData = {
        email: body.email,
        password: body.password,
        accountType: 'PERSONAL',
        userName: body.name,
      };

      const arrayUsers = getSessionStorage() ?? [];
      arrayUsers.push({userId: arrayUsers.length + 1, ...currentUser});
      setSessionStorage(arrayUsers);

      return HttpResponse.json(
        {userId: arrayUsers.length},
        { status: 200 });
    }

    return new HttpResponse(null, {
      status: 400,
      statusText: `The following fields are required ${!body.email && 'email '} ${!body.name && 'nombre '} ${!body.password && 'contraseña'}`
    });
  }),
  http.post<PathParams<string>, ForgotPasswordRequest >('/forgot-password-person', async ({ request }) => {
    const body = await request.json();
    const [getSessionStorage] = useSessionStorage<TypeUserSData[]>('users');
    const arrayUsers = getSessionStorage() ?? [];

    const foundUser = arrayUsers.find((user) => user.email === body.email);

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

  http.post("/login-companies", async ({ request }) => {
    const requestBody: LoginRequest | undefined =
      (await request.json()) as LoginRequest;
    const userEmail = requestBody?.email;
    const password = requestBody.password;


    const [getSessionStorage] = useSessionStorage<TypeUserSData[]>('companies');

    const arrayCompanies = getSessionStorage() ?? [];

    const validUser = arrayCompanies
      .find((company) => company.email === userEmail && company.password === password) || null;

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

  http.post("/password-recovery-companies", async ({ request }) => {
    const requestBody: ForgotPasswordRequest | undefined =
      (await request.json()) as ForgotPasswordRequest;
    const userEmail = requestBody.email;
    return HttpResponse.json({
      userEmail: userEmail,
    });
  }),

  http.post("/signup-companies", async ({ request }) => {
    const requestBody: SignupRequest | undefined =
      (await request.json()) as SignupRequest;

    const [getSessionStorage, setSessionStorage] = useSessionStorage<TypeUserSData[]>('companies');

    if (!!requestBody.email && !!requestBody.name && !!requestBody.password) {
      const currentUser: TypeUserSData = {
        email: requestBody.email,
        password: requestBody.password,
        accountType: 'ENTERPRISE',
        userName: requestBody.name,
      };

      const arrayCompanies = getSessionStorage() ?? [];
      arrayCompanies.push({userId: arrayCompanies.length + 1, ...currentUser});
      setSessionStorage(arrayCompanies);

      return HttpResponse.json(
        {userId: arrayCompanies.length},
        { status: 200 });
    }

    return new HttpResponse(null, {
      status: 400,
      statusText: `The following fields are required ${!requestBody.email && 'email '} ${!requestBody.name && 'nombre '} ${!requestBody.password && 'contraseña'}`
    });
  }),
];