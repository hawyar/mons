import styled from 'styled-components';
import { Container, Input, TextArea } from '../atoms/index';
import { up } from 'styled-breakpoints';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
const Form = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string(),
    title: yup.string(),
    email: yup.string(),
    objective: yup.string(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    e.target.reset();
    alert(JSON.stringify(data));
  };

  return (
    <Container>
      <GridWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserMeta>
            <div>
              <label>First Name</label>
              <FirstName ref={register} name='firstName' />
              <ErrorMsg>
                {errors.firstName && ' * First name is required'}
              </ErrorMsg>
            </div>

            <div>
              <label>Last Name</label>
              <LastName ref={register} name='lastName' />
            </div>
            <div>
              <label>Title</label>
              <Title ref={register} name='title' />
            </div>
            <div>
              <label>Email Address</label>
              <Email ref={register} name='email' />
            </div>
          </UserMeta>
          <ProfileMeta>
            <div>
              <label>Objective</label>
              <Objective ref={register} name='objective' />
            </div>
          </ProfileMeta>

          <Submit type='submit' />
        </form>
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
  grid-column-gap: 3rem;

  ${up('md')} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const ProfileMeta = styled.div`
  max-width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3rem;

  ${up('md')} {
    grid-template-columns: 1fr 1fr;
  }

  div {
    margin-bottom: 1rem;
  }
`;

const FirstName = styled(Input)``;
const LastName = styled(Input)``;
const Title = styled(Input)``;
const Email = styled(Input)``;

const Objective = styled(TextArea)`
  resize: none;
  height: 40px;
`;

const TemplateSelect = styled.select`
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  background-color: orange;
  border: none;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0;
`;
const Submit = styled.input`
  background-color: #000;
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'Manrope';
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
`;

export default Form;
