import { http, HttpResponse } from "msw";

interface RequestBody {
  userName: string;
  userEmail: string;
  password: string;
}

const validUsers = [
  { userEmail: "juan.jose1983@gmail.com", password: "123456" },
  { userEmail: "company@correo.com", password: "456789" },
  { userEmail: "JJEnterprise@correo.com", password: "987654" },
  { userEmail: "baufest@baufest.com", password: "987654" },
];

export const handlers = [
  http.post("/login", async ({ request }) => {
    const requestBody: RequestBody | undefined =
      (await request.json()) as RequestBody;
    const userEmail = requestBody.userEmail;
    const password = requestBody.password;
    const isValidUser = verifyUser(userEmail, password);
    if (!isValidUser) {
      return new HttpResponse(null, {
        status: 401,
        statusText: "Unauthorized",
      });
    } else {
      return HttpResponse.json({
        userId: 1,
        userProfie: "enterprise",
      });
    }
  }),
  http.post("/recovery-password", async ({ request }) => {
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

const verifyUser = (userEmail: string, password: string) => {
  const user = validUsers.find(
    (user) => user.userEmail === userEmail && user.password === password
  );
  if (user) {
    return true;
  }
  return false;
};
