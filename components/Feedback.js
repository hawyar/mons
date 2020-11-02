import React from 'react';
import styled from 'styled-components';
const Feedback = ({ children }) => {
  return (
    <div>
      {' '}
      <FeedbackWrapper>{children}</FeedbackWrapper>
    </div>
  );
};

const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    background-color: rgba(16, 137, 255, 1);
    border-radius: 5px;
    max-width: 320px;
    padding: 13px 20px;
    margin-bottom: 2rem;
    color: white;
  }
`;
export default Feedback;
