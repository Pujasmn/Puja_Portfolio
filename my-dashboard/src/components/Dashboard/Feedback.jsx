import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchFeedbackData } from '../../data/feedbackData';

const FeedbackContainer = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const FeedbackItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #444;
  border-radius: 5px;
`;

const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const FeedbackName = styled.span`
  font-weight: bold;
`;

const FeedbackRating = styled.span`
  color: #ffdd57;
`;

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedbackData().then(data => setFeedback(data));
  }, []);

  return (
    
    <FeedbackContainer>
      <h2>Customer's Feedback</h2>
      {feedback.map((item, index) => (
        <FeedbackItem key={index}>
          <FeedbackHeader>
            <FeedbackName>{item.name}</FeedbackName>
            <FeedbackRating>{'★'.repeat(item.rating)}</FeedbackRating>
          </FeedbackHeader>
          <div>{item.feedback}</div>
        </FeedbackItem>
      ))}
    </FeedbackContainer>
  );
};

export default Feedback;
