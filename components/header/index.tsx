import Link from "next/link";
import { Container } from "../../global-styles";
import * as SC from "./Header";

const Header: React.FC = () => {
  return (
    <Container>
      <SC.Wrapper>
        <Link href="/" passHref>
          <SC.Logo role="button" tabIndex="0">
            Games App
          </SC.Logo>
        </Link>
      </SC.Wrapper>
    </Container>
  );
};

export default Header;
