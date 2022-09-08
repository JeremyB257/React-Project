import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import logo from '../assets/dark-logo.png';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <div>
        <StyledNavLink to="/">Accueil</StyledNavLink>
        <StyledNavLink to="/freelances">Profils</StyledNavLink>
        <StyledNavLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledNavLink>
      </div>
    </StyledHeader>
  );
};

export default Header;
