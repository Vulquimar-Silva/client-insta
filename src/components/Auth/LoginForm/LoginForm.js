import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { Button, Icon, Form } from "semantic-ui-react";
import { setToken } from "../../../utils/token"
import { LOGIN } from "../../../graphql/user";

import "./LoginForm.scss"

export default function LoginForm() {
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [login] = useMutation(LOGIN);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email inválido!")
        .required("Entre com seu email!"),
      password: Yup.string()
        .required("Entre com sua senha!")
        .oneOf([Yup.ref("password")], true)
    }),
    onSubmit: async (formData) => {
      setError("");
      try {
        const { data } = await login({
          variables: {
            input: formData
          }
        });
        const { token } = data.login;
        setToken(token);
      } catch (error) {
        setError(error.message);
      }
    }
  });


  return (
    <Form className='login-form' onSubmit={formik.handleSubmit}>
      <h2>Entre e veja o que está rolando de bom...</h2>
      <Form.Input
        type="text"
        placeholder="Digite seu email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        type={!showPassword ? 'password' : 'text'}
        placeholder="Digite sua senha"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        icon={
          <Icon
            name={!showPassword ? 'eye' : 'eye slash'}
            onClick={() => setShowPassword(!showPassword)}
            link
            size='large'
            className="icon-eye"
          />
        }
      />
      <Button type="submit" className='btn-submit'>Entrar</Button>
      {error && <p className="submit-error">{error}</p>}
    </Form>
  )
}

function initialValues() {
  return {
    email: "",
    password: "",
  }
}