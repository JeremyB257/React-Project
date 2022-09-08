import React from 'react';
import img404 from '../assets/404.svg';
import styled from 'styled-components';
import colors from '../utils/style/colors';

const ErrorDiv = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ErrorLabel = styled.p`
  font-size: 22px;
  font-weight: bold;
  padding: 30px;
`;

const Error = () => {
  return (
    <ErrorDiv>
      <ErrorLabel>Oups...</ErrorLabel>
      <img src={img404} alt="Image 404 page non trouvée" />
      <ErrorLabel>Il semblerait qu'il y ait un problème</ErrorLabel>
    </ErrorDiv>
  );
};

export default Error;
