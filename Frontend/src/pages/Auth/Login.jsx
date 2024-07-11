import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/Authh/LoginForm";
import Nav from "../../components/Landing/Nav";

const Container = styled.div`
  background: #000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: calc(100vh - 5rem);
`;

const PromoArea = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #f7f7f7;
  padding: 1rem;
  margin: 0;
`;

const MiniText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #e5e5e5;
`;

const FormArea = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Login = () => {
  return (
    <>
      <Nav />
      <Container>
        <PromoArea>Login to your account</PromoArea>
        <MiniText>
          Get your things done in a disciplined way..just TASKIFY it
        </MiniText>
        <FormArea>
          <LoginForm />
        </FormArea>
      </Container>
    </>
  );
};

export default Login;
