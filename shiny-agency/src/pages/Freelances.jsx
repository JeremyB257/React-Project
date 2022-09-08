import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { Loader } from '../utils/style/Atoms';

const CardsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #2f2e41;
`;
const CardP = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #8186a0;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;

const Freelances = () => {
  const [freelance, setFreelance] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    fetch(`http://localhost:8000/freelances`).then((res) =>
      res
        .json()
        .then(({ freelancersList }) => {
          setFreelance(freelancersList);
          setDataLoading(false);
        })
        .catch((error) => console.log(error))
    );
  }, []);
  return (
    <CardsPage>
      <CardTitle>Trouvez votre prestataire</CardTitle>
      <CardP>Chez Shiny nous réunissons les meilleurs profils pour vous.</CardP>
      {isDataLoading ? (
        <Loader />
      ) : (
        <Cards>
          {freelance.map((profile) => (
            <Card
              key={profile.id}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </Cards>
      )}
    </CardsPage>
  );
};

export default Freelances;
