import PropTypes from "prop-types";
import styled from "styled-components";

export default function Card({ item }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
  `;

  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: #d9d9d9;
    color: black;
    width: 364px;
    height: 522px;
    padding: 24px;
  `;

  const CardContent = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  `;

  const Img = styled.img`
    width: 24px;
    height: 24px;
  `;

  const ProjectTitle = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Container>
      <h2>{item.nome}</h2>
      <CardContainer>
        {item.escolas &&
          item.escolas.map((escola, index) => {
            return (
              <CardContent key={index}>
                <div>
                  <h3>{escola.nome}</h3>
                  <p>{escola.inicio}</p>
                  <p>{escola.fim}</p>
                </div>
                <Img src={escola.img} alt="Foto da escola" />
              </CardContent>
            );
          })}
        {item.habilidades &&
          item.habilidades.map((habilidade, index) => {
            return (
              <CardContent key={index}>
                <h3>{habilidade.nome}</h3>
                <Img
                  src={habilidade.img}
                  alt={`ícona da skill ${habilidade.nome}`}
                />
              </CardContent>
            );
          })}
        {item.empresas &&
          item.empresas.map((empresa, index) => {
            return (
              <CardContent key={index}>
                <div>
                  <h3>{empresa.nome}</h3>
                  <p>{empresa.inicio}</p>
                  <p>{empresa.fim}</p>
                </div>
                <Img src={empresa.img} alt="Foto da empresa" />
              </CardContent>
            );
          })}
        {item.projetos &&
          item.projetos.map((projeto, index) => {
            return (
              <CardContent key={index}>
                <ProjectTitle>
                  <h3>{projeto.nome}</h3>
                  <a
                    href={projeto.repositorio}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositório
                  </a>
                  <a href={projeto.url} target="_blank" rel="noreferrer">
                    Site
                  </a>
                </ProjectTitle>
                <Img
                  src={projeto.img}
                  alt={`imagem do projeto, ${projeto.nome}`}
                />
              </CardContent>
            );
          })}
      </CardContainer>
    </Container>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
