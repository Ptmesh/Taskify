import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Navbar = styled.div`
  padding: 3rem;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f7f7f7;
  background: #000;
`;
const LeftNav = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
const RightNav = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  color: white;
`;
const NavItem = styled(Link)`
  text-decoration: none;
  color: #f7f7f7;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #7e6dd6;
  }
`;
const Nav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar>
        <LeftNav onClick={handleClick}>Taskify.</LeftNav>
        <RightNav>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Get Started</NavItem>
        </RightNav>
      </Navbar>
    </>
  );
};

export default Nav;
