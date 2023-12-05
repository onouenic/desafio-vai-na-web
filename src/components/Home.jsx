import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";
import facebook from "../../public/facebook.svg";
import profile from "../../public/profile.png";
import styled from "styled-components";

export default function Home() {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  `;

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
  `;

  const ContainerIcones = styled.div`
    display: flex;
    justify-content: flex-start;
    align-itens: center;
    gap: 24px;
  `;

  return (
    <Container>
      <div>
        <img src={profile} alt="foto do perfil" />
      </div>
      <ContentContainer>
        <h1>Olá, eu sou Filipe Onoue</h1>
        <ContainerIcones>
          <a
            href="https://www.instagram.com/filipeonoue/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="ícone do instagram" />
          </a>
          <a href="https://www.linkedin.com/in/filipeonoue/"
            target="_blank"
            rel="noreferrer">
            <img src={linkedin} alt="ícone do linkedin" />
          </a>
          <a href="https://www.facebook.com/filipe.onoue"
            target="_blank"
            rel="noreferrer">
            <img src={facebook} alt="ícone do facebook" />
          </a>
        </ContainerIcones>
      </ContentContainer>
    </Container>
  );
}
