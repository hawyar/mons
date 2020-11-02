import Layout from '../components/Layout';
import Nav from '../components/Header/Nav';
import Hero from '../components/Hero/Hero';
import Form from '../components/Inputs/Form';
export default function Home() {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Form />
    </Layout>
  );
}
