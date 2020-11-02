import styled from 'styled-components';
import { Container, Input, TextArea } from '../atoms/index';
import { up, down, between, only } from 'styled-breakpoints';

const Form = () => {
  return (
    <Container>
      <GridWrapper>
        <UserMeta>
          <FirstName placeholder='First Name' />
          <LastName placeholder='Last Name' />
        </UserMeta>
        <ProfileMeta>
          <Title placeholder='Title' />
          <Objective placeholder='Objective' />
        </ProfileMeta>
      </GridWrapper>
    </Container>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const UserMeta = styled.div`
  max-width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;

  ${up('md')} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProfileMeta = styled.div`
  max-width: 90%;
`;

const FirstName = styled(Input)``;
const LastName = styled(Input)``;
const Title = styled(Input)``;
const Objective = styled(TextArea)`
  resize: none;
`;

export default Form;
