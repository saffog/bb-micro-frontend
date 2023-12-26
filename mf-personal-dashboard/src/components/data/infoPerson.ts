const API_SERVER = "http://localhost:8080";

export const getInfoPerson = () =>
  fetch(`${API_SERVER}/infoPerson`).then((res) => res.json());

export const getInfoPersonByUserId = async(userId:string) => {

  const resp = await fetch(`${API_SERVER}/infoPerson/${userId}`)
  const { products } = await resp.json()

  return products

}