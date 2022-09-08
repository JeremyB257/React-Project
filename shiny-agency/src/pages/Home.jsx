import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/home-illustration.svg';
import styled from 'styled-components';
import colors from '../utils/style/colors';

const ContainerDiv = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;
const StyledNavLink = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  border-radius: 30px;
  background-color: ${colors.primary};
`;
const StyledP = styled.p`
  font-size: 50px;
  height: 250px;
  width: 550px;
  font-weight: 700;
`;

function Home() {
  return (
    <ContainerDiv>
      <div>
        <StyledP>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </StyledP>
        <StyledNavLink to="/survey/1">Faire le test</StyledNavLink>
      </div>
      <img src={img} alt="Image d'illustration accueil" />
    </ContainerDiv>
  );
}

export default Home;
