import './Home.css';
import Banner from '../../components/Banner/Banner';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import { Container } from '@chakra-ui/react'

function Home() {

  return (
    <div>
      <Banner />
      <Container maxW='6xl'>
        <HomeCategories />
      </Container>
    </div>
  );
}

export default Home;