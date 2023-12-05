import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  const data = [
    {
      nome: "Estudos",
      escolas: [
        {
          nome: "Trybe",
          inicio: "AGO/2021",
          fim: "NOV/2022",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "Vai na Web",
          inicio: "JUL/2023",
          fim: "Cursando",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
      ],
    },
    {
      nome: "Habilidades",
      habilidades: [
        {
          nome: "HTML",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "CSS",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "JavaScript",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "React",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "Redux",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "Context API",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "Node",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "Express",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "MySQL",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "MongoDB",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
      ],
    },
    {
      nome: "Profissional",
      empresas: [
        {
          nome: "Força Aérea Brasileira",
          inicio: "AGO/2012",
          fim: "JUL/2020",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "NIC.br",
          inicio: "MAIO/2023",
          fim: "Atual",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
      ],
    },
  ];

  const Container = styled.div `
    display: flex;
    justify-content: space-around;
    align-itens: center;
    gap: 24px;
  `

  return (
    <div>
      <Header />
      <Container>
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </Container>
      <Footer />
    </div>
  );
}
