import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Increased gap for better spacing */
  width: 100%; /* Take full width */
  max-width: 400px; /* Restrict max width */
  margin: 0 auto; /* Center the form */
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc; /* Add a light border */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); /* Light shadow for better UI */
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #7e6dd6;
  color: white;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Light shadow */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6956b3; /* Slightly darker shade on hover */
  }
`;

const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      phone,
      password,
    };
    axios
      .post("http://127.0.0.1:3000/api/register", data)
      .then((res) => {
        console.log(res.data);
        alert("Registration Successful");
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong, please try again.");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        required
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <Input
        type="text"
        required
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <Input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        required
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
