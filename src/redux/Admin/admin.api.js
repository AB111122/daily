import axios from "axios";

export const getUsers = async () => {
  let res = await axios.get(`http://localhost:8001/users`);
  return res.data;
};

export const deleteUser = async (userId) => {
  let res = await axios.delete(
    `http://localhost:8001/users/delete/${userId}`
  );
  return res;
};

export const getnutriData = async () => {
  let res = await axios.get(
    `http://localhost:8001/nutrient/list`
  );
  return res.data;
};

export const deleteNutriData = async (nutriId) => {
  let res = await axios.delete(
    `http://localhost:8001/nutrient/delete/${nutriId}`,
    {
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return res;
};

export const addnutriData = async (data) => {
  let res = await axios.post(
    `http://localhost:8001/nutrient/add`,
    data,
    {
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return res;
};

export const updateNutriData = async (nutriId, data) => {
  let res = await axios.patch(
    `http://localhost:8001/nutrient/update/${nutriId}`,
    data,
    {
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    }
  );

  return res.data;
};

export const singleUserNutridata = async (userId) => {
  let res = await axios.get(
    `http://localhost:8001/users/${userId}`
  );

  return res.data;
};
