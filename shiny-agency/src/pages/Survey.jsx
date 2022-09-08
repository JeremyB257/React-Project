import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from '../utils/style/Atoms';
import colors from '../utils/style/colors';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

function Survey() {
  const [questions, setQuestions] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    fetch(`http://localhost:8000/survey`).then((res) =>
      res
        .json()
        .then(({ surveyData }) => {
          setQuestions(surveyData);
          setDataLoading(false);
        })
        .catch((error) => console.log(error))
    );
  }, []);

  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  return (
    <div>
      <SurveyContainer>
        <QuestionTitle>Question {questionNumber}</QuestionTitle>
        {isDataLoading ? (
          <Loader />
        ) : (
          <QuestionContent>{questions[questionNumber]} </QuestionContent>
        )}
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent </Link>
        {questionNumberInt === 10 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        )}
      </SurveyContainer>
    </div>
  );
}

export default Survey;
