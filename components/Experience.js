import React from 'react';
import styled from 'styled-components';
const Experience = () => {
  return (
    <div style={{ margin: `3rem 0` }}>
      <ButtonWrapper>
        <AddButton type='button' style={{ marginTop: `3px` }}>
          <svg
            width='20'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='rgba(0,0,0,0.3)'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
              clipRule='evenodd'
            />
          </svg>
        </AddButton>
        <p>add experience</p>
      </ButtonWrapper>
    </div>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-content: center;
  color: rgba(0, 0, 0, 0.3);
`;

const AddButton = styled.button`
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default Experience;
