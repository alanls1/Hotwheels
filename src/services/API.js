import axios from "axios";

export const getListCar = async () => {
  const { data } = await axios.get("http://localhost:5000/cars");
  return data;
};

export function postNewCar(obj) {
  axios.post("http://localhost:5000/cars", obj);
}

export function putCar(obj) {
  axios.put("http://localhost:5000/cars", obj);
}

export function deleteACar(id) {
  axios.delete(`http://localhost:5000/cars/${id}`);
}
