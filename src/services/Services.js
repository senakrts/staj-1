import axios from 'axios';

export const login = async (username, password) => {
  let info = { username: username, password: password };
  let token = (await axios.post('http://localhost:8080/api/login', info)).data;
  localStorage.setItem('token', token);
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return token;
};
export const getUsers = async () => {
  let users = (
    await axios.get(
      `http://localhost:8080/api/users/${localStorage.getItem('username')}`
    )
  ).data;
  return users;
};

export const UserEdit = async (dateBirth, identificationNo) => {
  axios.put(
    `http://localhost:8080/api/users/${localStorage.getItem('username')}/edit`,
    {
      birth_date: dateBirth,
      identification_no: identificationNo
    }
  );
};
