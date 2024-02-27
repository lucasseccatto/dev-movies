import Logo from "../../assets/logo.png";
import { StyledHeader, StyledLogo } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="logo-dev-movies" />
    </StyledHeader>
  );
}

export default Header;
