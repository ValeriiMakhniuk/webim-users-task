import axios from 'axios';

import { Routes } from './routes';

export interface MAuthToken {
  username: string;
  password: string;
}

export interface MUser {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  password: string;
  is_active: boolean;
  last_login?: string;
  is_superuser?: boolean;
}

export interface MUserData {
  username: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  is_active: boolean;
}

export const getAuthToken = async (
  credentials: MAuthToken
): Promise<string> => {
  return await axios
    .post(Routes.AuthToken, credentials)
    .then((res) => res.data.token);
};

export const getUsers = async (token: string): Promise<MUser[]> => {
  return await axios
    .get(`${Routes.Users}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => res.data);
};

export const getUser = async (
  userId: number,
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

export const postUser = async (
  userData: MUserData,
  token: string
): Promise<MUser> => {
  return await axios
    .post(`${Routes.Users}/`, userData, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data);
};

export const putUser = async (
  userId: number,
  userData: MUserData,
  token: string
): Promise<MUser> => {
  return await axios
    .put(`${Routes.Users}/${userId}/`, userData, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data);
};

export const patchUser = async (
  userId: number,
  userData: MUserData,
  token: string
): Promise<MUser> => {
  return await axios
    .patch(`${Routes.Users}/${userId}/`, userData, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data);
};

export const deleteUser = async (
  userId: number,
  token: string
): Promise<number> => {
  return await axios
    .delete(`${Routes.Users}/${userId}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then(() => userId);
};
