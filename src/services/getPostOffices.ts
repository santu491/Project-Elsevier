import axios from 'axios';
const POSTAL_PINCODE_URL = 'https://api.postalpincode.in/postoffice';

export const getPostOffices = (cityName: string) => {
  return axios.get(`${POSTAL_PINCODE_URL}/${cityName}`);
};
