import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

  const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const NavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin: 0 auto 32px auto;
  `;

  const NavLi = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  `;

  return (
    <NavContainer>
      <NavUl>
        <NavLi>
          <Link to={"/"}>Inicio</Link>
        </NavLi>
        <NavLi>
          <Link to={"/sobre"}>Sobre</Link>
        </NavLi>
        <NavLi>
          <Link to={"/projetos"}>Projetos</Link>
        </NavLi>
      </NavUl>
    </NavContainer>
  );
}
