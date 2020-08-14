import React from 'react';

import { useFormik } from 'formik';

import { Form, Button, Alert } from 'react-bootstrap';

import * as yup from 'yup';

import { useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';

import { MUserData } from '../../api/api';

const AddUserSchema = yup.object({
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
  firstName: yup
    .string()
    .max(30, "*First name can't be longer than 30 characters"),
  lastName: yup
    .string()
    .max(150, "*Last name can't be longer than 30 characters"),
  isActive: yup.boolean().required(),
});

interface FormikValues {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
}

interface UserAddFormProps {
  handlePostUser: (userData: MUserData) => void;
  handleClose: () => void;
}

export const UserAddForm: React.FC<UserAddFormProps> = ({ handlePostUser }) => {
  const userError = useSelector((state: RootState) => {
    return state.users.error;
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      isActive: false,
    },
    validationSchema: AddUserSchema,
    onSubmit(values: FormikValues, { setSubmitting, resetForm, setStatus }) {
      const userData: MUserData = {
        username: values.username,
        password: values.password,
        first_name: values.firstName,
        last_name: values.lastName,
        is_active: values.isActive,
      };
      Promise.resolve(handlePostUser(userData))
        .then(() => setSubmitting(false))
        .then(() => {
          if (!userError) {
            setStatus({ type: 'sucess', username: values.username });
          }
        })
        .then(() => {
          setTimeout(() => {
            resetForm();
          }, 2500);
        });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    formik.handleSubmit(e);
  };

  const isUserAdded = formik.status && formik.status.type === 'sucess';

  return (
    <>
      {userError && <Alert variant='danger'>{userError}</Alert>}
      {isUserAdded && (
        <Alert variant='success'>
          User <b>{formik.status.username}</b> has created
        </Alert>
      )}
      <Form noValidate={true} onSubmit={handleSubmit}>
        <Form.Group controlId='username'>
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
            placeholder='Enter password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={!!formik.errors.password}
            autoFocus={true}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='firstName'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter first name'
            name='firstName'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            isInvalid={!!formik.errors.firstName}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='lastName'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter last name'
            name='lastName'
            onChange={formik.handleChange}
            value={formik.values.lastName}
            isInvalid={!!formik.errors.lastName}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='active'>
          <Form.Check
            type='checkbox'
            label='Active'
            name='isActive'
            onChange={formik.handleChange}
            checked={formik.values.isActive}
          />
          <Form.Text className='text-muted'>
            Designates whether this user should be treated as active.
          </Form.Text>
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
        >
          Add user
        </Button>
      </Form>
    </>
  );
};
