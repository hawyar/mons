import React from 'react';
import AlientLogo from '../SVG/AlienLogo';
import { Container } from '../atoms/index';
import styled from 'styled-components';
const Nav = () => {
  return (
    <div>
      <Container>
        <div>
          <AlientLogo />
        </div>
        <Button>Contribute</Button>
      </Container>
    </div>
  );
};

const Button = styled.div`
  padding: 12px 18px;
  color: white;
  background-color: #2d4059;
  border-radius: 5px;
  font-size: 0.9em;
  cursor: pointer;
`;
export default Nav;
