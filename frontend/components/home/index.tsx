import Header from '../header';
import PostEdit from '../postEdit';
import PostList from '../postList';
import { Container } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <PostList />
      <PostEdit />
    </Container>
  );
};

export default Home;
