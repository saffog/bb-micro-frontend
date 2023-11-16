import { http, HttpResponse } from "msw";

interface RequestBody {
  userName: string;
  userEmail: string;
  password: string;
}

interface User {
  userId: number;
  userEmail: string;
  password: string;
}

const validUsers = [
  { userId: 1, userEmail: "juan.jose1983@gmail.com", password: "123456" },
  { userId: 2, userEmail: "company@correo.com", password: "456789" },
  { userId: 3, userEmail: "JJEnterprise@correo.com", password: "987654" },
  { userId: 4, userEmail: "baufest@baufest.com", password: "987654" },
];

export const handlers = [
  http.post("/login", async ({ request }) => {
    const requestBody: RequestBody | undefined =
      (await request.json()) as RequestBody;
    const userEmail = requestBody.userEmail;
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
        userProfie: "enterprise",
      });
    }
  }),
  http.post("/password-recovery", async ({ request }) => {
    const requestBody: RequestBody | undefined =
      (await request.json()) as RequestBody;
    const userEmail = requestBody.userEmail;
    return HttpResponse.json({
      userEmail: userEmail,
    });
  }),
  http.post("/companies", async ({ request }) => {
    const requestBody: RequestBody | undefined =
      (await request.json()) as RequestBody;
    const userName = requestBody.userName;
    const userEmail = requestBody.userEmail;
    return HttpResponse.json({
      userName: userName,
      userEmail: userEmail,
    });
  }),
];

const verifyUser = (userEmail: string, password: string): User | null =>
  validUsers.find(
    (user) => user.userEmail === userEmail && user.password === password
  ) || null;
