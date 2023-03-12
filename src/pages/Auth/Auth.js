import React, { useState } from 'react';
import { Container, Image } from "semantic-ui-react";

import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";

import instaWoman from "../../assets/images/svg/InstaWoman.svg";
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className='auth'>
      <Image src={instaWoman} />

      <div className="container-form">
        {showLogin ?
          <LoginForm />
          :
          <RegisterForm setShowLogin={setShowLogin} />}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              Não tem uma conta?
              <span onClick={() => setShowLogin(!showLogin)}>Cadastrar</span>
            </>
          ) : (
            <>
              Tem uma conta?
              <span onClick={() => setShowLogin(!showLogin)}>Iniciar sessão</span>
            </>
          )}
        </p>
      </div>

    </Container>
  )
}
