import React, { useState } from 'react';

import { Grid, _ } from 'gridjs-react';
import 'gridjs/dist/theme/mermaid.css';

import { formatToNow } from '../../utils/dates';

import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, postUser, putUser, patchUser } from './usersSlice';
import { RootState } from '../../app/rootReducer';

import { Button, Modal } from 'react-bootstrap';
import { UserEditForm } from './UserEditForm';
import { UserAddModal } from './userAddModal';

import { MUser, MUserData } from '../../api/api';

interface UsersTableProps {
  users: MUser[];
}

export interface CellActionProps {
  user: MUser;
  handleDeleteUser: (userId: number) => void;
  handlePutUser: (userId: number, userData: MUserData) => void;
  handlePatchUser: (userId: number, userData: MUserData) => void;
}

const CellAction: React.FC<CellActionProps> = ({
  user,
  handleDeleteUser,
  handlePutUser,
  handlePatchUser,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => setShowModal(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleDeleteClick = () => {
    handleDeleteUser(user.id);
    setShowModal(false);
  };

  return (
    <>
      <Button variant='primary' onClick={handleClick}>
        Edit
      </Button>
      <Modal show={showModal} onHide={handleClose} centered={true}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserEditForm
            user={user}
            handleDeleteUser={handleDeleteUser}
            handlePutUser={handlePutUser}
            handlePatchUser={handlePatchUser}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='danger'
            onClick={handleDeleteClick}
            disabled={user.is_active}
          >
            Delete
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const dispatch = useDispatch();

  const { usersById } = useSelector((state: RootState) => {
    return state.users;
  });
  const { token } = useSelector((state: RootState) => {
    return state.auth;
  });

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId, token!));
  };

  const handlePostUser = (userData: MUserData) => {
    dispatch(postUser(token!, userData));
  };

  const handlePutUser = (userId: number, userData: MUserData) => {
    dispatch(putUser(userId, userData, token!));
  };

  const handlePatchUser = (userId: number, userData: MUserData) => {
    dispatch(patchUser(userId, userData, token!));
  };

  return (
    <>
      <h3 className='align-self-center'>Users</h3>
      <UserAddModal handlePostUser={handlePostUser} />
      <Grid
        columns={[
          {
            name: 'ID',
            sort: {
              enabled: true,
            },
          },
          'Username',
          'First name',
          'Last name',
          'Last Login',
          'Superuser status',
          {
            name: 'Actions',
            formatter(cell, row) {
              const cellUserId = row.cells[0].data as number;
              return _(
                <CellAction
                  user={usersById[cellUserId]}
                  handleDeleteUser={handleDeleteUser}
                  handlePutUser={handlePutUser}
                  handlePatchUser={handlePatchUser}
                />
              );
            },
          },
        ]}
        data={users.map((user) => {
          return [
            user.id,
            user.username,
            user.first_name,
            user.last_name,
            user.last_login ? formatToNow(new Date(user.last_login)) : '',
            user.is_superuser ? 'True' : 'False',
            null,
          ];
        })}
        search={{
          debounceTimeout: 1000,
        }}
        pagination={{
          enabled: true,
          limit: 10,
          summary: false,
        }}
        language={{
          search: {
            placeholder: '🔍\tSearch...',
          },
          pagination: {
            previous: '⬅️',
            next: '➡️',
          },
        }}
      />
    </>
  );
};
