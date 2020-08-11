import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './authSlice';
import { RootState } from '../../app/rootReducer';

import { Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';

const AuthUserSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(1, '*Username must have at least 1 character')
    .max(150, "*Username can't be longer than 100 characters")
    .matches(/^[\w.@+-]+$/, '*Username is not valid'),
  password: yup
    .string()
    .required()
    .min(8, '*Password must have at least 8 character')
    .max(128, "*Password can't be longer than 128 characters")
    .matches(/^(?=.*[A-Z])(?=.*\d)/, '*Password is not valid'),
});

interface FormikValues {
  username: string;
  password: string;
}

export const AuthForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const error = useSelector((state: RootState) => {
    return state.auth.error;
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: AuthUserSchema,
    onSubmit(values: FormikValues, { setSubmitting }) {
      Promise.resolve(dispatch(authenticate(values)))
        .then(() => setSubmitting(false))
        .then(() => {
          if (!error) {
            history.push('/');
          }
        });
    },
  });

  // react-bootstrap bug that Form components's submit event Type is React.FormEvent<HTMLElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    formik.handleSubmit(e);
  };

  return (
    <Row
      as='section'
      className='justify-content-center h-100 align-items-center'
    >
      <Col xl={4} lg={6} md={8} sm={8} xs={10}>
        <Card>
          <Card.Body>
            <Card.Title as='h3'>Sign in</Card.Title>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form noValidate={true} onSubmit={handleSubmit}>
              <Form.Group controlId='login'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter username'
                  name='username'
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  isInvalid={!!formik.errors.username}
                  autoFocus={true}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  isInvalid={!!formik.errors.password}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                disabled={formik.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
