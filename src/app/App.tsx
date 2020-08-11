import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';

import { AuthForm } from '../feauteres/auth/AuthForm';
import { Container } from 'react-bootstrap';

const Logged: React.FC = () => {
  return <p>Logged in!</p>;
};

export const App: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Container fluid={true} as='main' className='vh-100'>
      <Route exact={true} path='/'>
        {!isAuthenticated ? <Redirect to='/login' /> : <Logged />}
      </Route>
      <Route exact={true} path='/login' component={AuthForm} />
    </Container>
  );
};
