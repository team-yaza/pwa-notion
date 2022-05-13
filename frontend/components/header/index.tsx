import Image from 'next/image';
import Link from 'next/link';
import { Container } from './style';
import logo from '../../public/assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Link href="/hi">
        <Image
          className="logo"
          src={logo}
          alt="logo"
          width="40px"
          height="40px"
        />
      </Link>
      <h1>notion</h1>
    </Container>
  );
};

export default Header;
