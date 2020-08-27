import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { deauthenticate } from '../feauteres/auth/authSlice';

import { AuthForm } from '../feauteres/auth/AuthForm';
import { UsersPage } from '../feauteres/users/usersPage';
import { Container, Navbar, Button } from 'react-bootstrap';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogOut = () => {
    dispatch(deauthenticate());
  };

  return (
    <>
      {isAuthenticated && (
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand>Users CMS</Navbar.Brand>
          <Button className='ml-auto' onClick={handleLogOut}>
            Log out
          </Button>
        </Navbar>
      )}
      <Container fluid={true} as='main' className='d-flex flex-column h-100'>
        <Route exact={true} path='/'>
          {!isAuthenticated ? <Redirect to='/login' /> : <UsersPage />}
        </Route>
        <Route exact={true} path='/login' component={AuthForm} />
      </Container>
    </>
  );
};
