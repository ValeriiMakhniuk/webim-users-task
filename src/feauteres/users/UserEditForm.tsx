import React, { useState } from 'react';

import { useFormik } from 'formik';

import { Form, Button, Alert } from 'react-bootstrap';

import * as yup from 'yup';

import { CellActionProps } from './usersTable';
import { MUserData } from '../../api/api';

const EditUserSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(1, '*Username must have at least 1 character')
    .max(150, "*Username can't be longer than 100 characters")
    .matches(/^[\w.@+-]+$/, '*Username is not valid'),
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
  firstName?: string;
  lastName?: string;
  isActive: boolean;
}

interface UserEditFormProps extends CellActionProps {}

export const UserEditForm: React.FC<UserEditFormProps> = ({
  user,
  handlePutUser,
  handlePatchUser,
}) => {
  const [initialValues, setInitialValues] = useState<FormikValues>({
    username: user.username,
    firstName: user.first_name,
    lastName: user.last_name,
    isActive: user.is_active,
  });

  const formik = useFormik({
    initialValues,
    validationSchema: EditUserSchema,
    onSubmit(values: FormikValues, { setSubmitting, setStatus, setValues }) {
      const userData: MUserData = {
        username: values.username,
        first_name: values.firstName,
        last_name: values.lastName,
        is_active: values.isActive,
      };
      Promise.resolve(handlePatchUser(user.id, userData))
        .then(() => setStatus({ type: 'sucess', username: values.username }))
        .then(() => setInitialValues(values))
        .then(() => {
          setTimeout(() => {
            setSubmitting(false);
            setStatus('pending');
          }, 2500);
        });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    formik.handleSubmit(e);
  };

  const isEditSucess = formik.status && formik.status.type === 'sucess';

  return (
    <>
      {isEditSucess && (
        <Alert variant='success'>
          User <b>{formik.status.username}</b> was updated
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
          Save changes
        </Button>
      </Form>
    </>
  );
};
