import axios from 'axios';

import { Routes } from './routes';

export interface MAuthToken {
  username: string;
  password: string;
}

export interface MUser {
  id?: number;
  username: string;
  first_name?: string;
  last_name?: string;
  password: string;
  is_active: boolean;
  readonly last_login?: string;
  readonly is_superuser?: boolean;
}

export const getAuthToken = async (
  credentials: MAuthToken
): Promise<string> => {
  return await axios
    .post(Routes.AuthToken, credentials)
    .then((res) => res.data);
};

export const getUsers = async (token: string): Promise<MUser[]> => {
  return await axios
    .get(Routes.Users, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => res.data);
};

export const getUser = async (
  userId: string,
  token: string
): Promise<MUser> => {
  return await axios
    .get(`${Routes.Users}/${userId}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => res.data);
};

export const postUser = async (userData: MUser, token: string) => {
  await axios.post(Routes.Users, userData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const putUser = async (
  userId: string,
  userData: MUser,
  token: string
) => {
  await axios.put(`${Routes.Users}/${userId}/`, userData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const patchUser = async (
  userId: string,
  userData: MUser,
  token: string
) => {
  await axios.patch(`${Routes.Users}/${userId}/`, userData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const deleteUser = async (userId: string, token: string) => {
  await axios.delete(`${Routes.Users}/${userId}/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};
