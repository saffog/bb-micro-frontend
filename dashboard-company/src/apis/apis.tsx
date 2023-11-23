export const ingresosEgresos = () => {
  return fetch("/ingresos-egresos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your-token",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Ha ocurrido un error", error);
      throw error;
    });
};

export const inversiones = () => {
  return fetch("/inversiones", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your-token",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Ha ocurrido un error", error);
      throw error;
    });
};
