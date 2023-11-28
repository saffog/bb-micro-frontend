export const login = (email: string, password: string) => {
  return fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your-token",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Usuario o contraseña incorrectos");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Ha ocurrido un error", error);
      throw error;
    });
};

export const createAccount = (
  empresa: string,
  representante: string,
  email: string,
  password: string,
  password2: string,
  ok: boolean
) => {
  return fetch("/companies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your-token",
    },
    body: JSON.stringify({
      userName: empresa,
      representative: representante,
      email,
      password: password,
      password2: password2,
      ok: ok,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

export const recoverPassword = (email: string) => {
  return fetch("/password-recovery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
