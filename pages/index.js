import Layout from '../components/Layout';
import Nav from '../components/Header/Nav';
import Hero from '../components/Hero/Hero';
import Form from '../components/Inputs/Form';
import Feedback from '../components/Feedback';

export default function Home() {
  return (
    <Layout>
      <Feedback />
      <Nav />
      <Hero />
      <Form />
    </Layout>
  );
}
