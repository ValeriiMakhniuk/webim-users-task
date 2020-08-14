import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import { fetchUsers } from './usersSlice';

import { UsersTable } from './usersTable';
import { Row, Col, Card } from 'react-bootstrap';

export const UsersPage: React.FC = () => {
  const dispatch = useDispatch();
  const { usersById, allIds, error: usersError, isLoading } = useSelector(
    (state: RootState) => state.users
  );
  const { token } = useSelector((state: RootState) => state.auth);
  const users = allIds.map((userId) => usersById[userId]);

  useEffect(() => {
    if (token) {
      dispatch(fetchUsers(token));
    }
  }, []);

  return (
    <Row as='section' className='h-100 pt-3'>
      <Col className='text-center'>
        <UsersTable users={users} />
      </Col>
    </Row>
  );
};
