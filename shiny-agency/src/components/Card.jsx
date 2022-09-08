import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../assets/profile.png';
import styled from 'styled-components';
import colors from '../utils/style/colors';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 340px;
  width: 350px;
  margin: 35px;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: 400;
`;
const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
};

export default Card;
