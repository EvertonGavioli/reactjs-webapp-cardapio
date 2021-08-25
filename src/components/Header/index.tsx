import LogoImage from "../../assets/images/svg-logo.svg";

import { Container, Logo } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo src={LogoImage} alt="" />
    </Container>
  );
};

export default Header;
