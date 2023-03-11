import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./RegisterForm.scss"

export default function RegisterForm(props) {

  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: initialFormValues(),
    validationSchema: Yup.object({
      name: Yup.string().required(),
      username: Yup.string()
        .matches(/^[a-zA-Z0-9-]*$/, "O username não pode conter espaço!")
        .required(true),
      email: Yup.string()
        .email("Email inválido!")
        .required("O email é obrigatório!"),
      password: Yup.string()
        .required(true)
        .oneOf([Yup.ref("repeatPassword")], true),
      repeatPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("password")], "As senhas não são iguais!"),
    }),
    onSubmit: (formValues, { resetForm }) => {
      console.log(formValues);
      resetForm({ values: "" })
    },
  });

  return (
    <>
      <h2 className='register-form-title'>
        Cadastre para interagir com suas amigas.
      </h2>
      <Form className='register-form' onSubmit={formik.handleSubmit}>
        <Form.Input
          type='text'
          name='name'
          placeholder='Digite seu nome e sobrenome'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name && true}
        />

        <Form.Input
          type='text'
          name='username'
          placeholder='Digite um usuário'
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />

        <Form.Input
          type='text'
          name='email'
          placeholder='Digite seu email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />

        <Form.Input
          type='password'
          name='password'
          placeholder='Digite uma senha'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />

        <Form.Input
          type='password'
          name='repeatPassword'
          placeholder='Digite novamente a sua senha'
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
        />
        <Button type='submit' className='btn-submit'>Cadastrar</Button>
      </Form>
    </>
  )
}

function initialFormValues() {
  return {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  }
}
