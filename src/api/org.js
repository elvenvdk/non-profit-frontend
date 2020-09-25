import axios from 'axios';
import { setGlobal } from 'reactn';

import { setStorage } from './auth';

const API_URL = process.env.REACT_APP_API_AUTH_URL;

export const addOrg = async (
  name,
  owner,
  addressLine1,
  addressLine2,
  city,
  state,
  zipCode,
  photo,
) => {
  console.log('FROM FRONTEND API', {
    name,
    owner,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    photo,
  });
  try {
    const res = await axios.post(
      `http://localhost:8003/api/org/add`,
      (name, owner, addressLine1, addressLine2, city, state, zipCode, photo),
    );
    console.log({ res: res.data });
    setStorage({ orgId: res.data.orgId, orgToken: res.data.orgToken });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateOrg = async ({
  name,
  addressLine1,
  addressLine2,
  city,
  state,
  zipCode,
  photo,
  active,
}) => {
  try {
    const res = await axios.put(`${API_URL}/api/org/update`, {
      name,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      photo,
      active,
    });

    return res.data;
  } catch (error) {
    return error.data.response;
  }
};
