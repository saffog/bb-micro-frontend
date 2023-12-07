import { http, HttpResponse } from "msw";

interface RequestBody {
  userName: string;
  email: string;
  password: string;
}

interface User {
  userId: number;
  userName: string;
  email: string;
  password: string;
}

const validUsers = [
  {
    userId: 4,
    email: "juan.jose1983@gmail.com",
    password: "123456",
    userName: "juan jose",
  },
  {
    userId: 5,
    email: "company@correo.com",
    password: "456789",
    userName: "company",
  },
  {
    userId: 6,
    email: "JJEnterprise@correo.com",
    password: "987654",
    userName: "JJEnterprise",
  },
  {
    userId: 7,
    email: "baufest@baufest.com",
    password: "987654",
    userName: "baufest",
  },
];

export const handlers = [
  http.post("/login-companies", async ({ request }) => {
    const requestBody: RequestBody | undefined =
      (await request.json()) as RequestBody;
    const userEmail = requestBody.email;
    const password = requestBody.password;
    const validUser = verifyUser(userEmail, password);
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
    const requestBody: RequestBody | undefined =
      (await request.json()) as RequestBody;
    const userEmail = requestBody.email;
    return HttpResponse.json({
      email: userEmail,
    });
  }),
  http.post("/signup-companies", async ({ request }) => {
    const requestBody: RequestBody | undefined =
      (await request.json()) as RequestBody;
    const userName = requestBody.userName;
    const userEmail = requestBody.email;
    return HttpResponse.json({
      userName: userName,
      email: userEmail,
    });
  }),
];

const verifyUser = (email: string, password: string): User | null =>
  validUsers.find(
    (user) => user.email === email && user.password === password
  ) || null;
