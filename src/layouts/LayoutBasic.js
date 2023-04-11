import React from "react";
import { Container } from "semantic-ui-react";
import { Outlet } from 'react-router-dom';
import Header from "../components/Header"

export default function LayoutBasic() {
  return (
    <>
      <Header />
      <Container className="layout-basic">
        <Outlet />
      </Container>
    </>
  )
}