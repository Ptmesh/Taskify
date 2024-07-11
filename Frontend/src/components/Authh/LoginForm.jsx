import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #7e6dd6;
  color: white;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6956b3;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post("http://127.0.0.1:3000/api/login", data)
      .then((res) => {
        console.log(res.data);
        alert("Login Successful");
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong, please check your credentials");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
