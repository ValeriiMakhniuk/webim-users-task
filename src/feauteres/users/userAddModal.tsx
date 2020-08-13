import React, { useState, useEffect } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { UserAddForm } from './UserAddForm';
import { MUserData } from '../../api/api';

export interface UserAddModal {
  handlePostUser: (userData: MUserData) => void;
}

export const UserAddModal: React.FC<UserAddModal> = ({ handlePostUser }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button
        className='align-self-center'
        variant='success'
        onClick={handleClick}
      >
        Add User
      </Button>
      <Modal show={showModal} onHide={handleClose} centered={true}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserAddForm
            handlePostUser={handlePostUser}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
