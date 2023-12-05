import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

export default function Projects() {
  const data = [
    {
      nome: "Projetos",
      projetos: [
        {
          nome: "Trybetunes",
          repositorio: "https://github.com/onoue9/trybetunes",
          url: "https://onoue9.github.io/trybetunes/",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
        {
          nome: "Block Destroyer craftyjs",
          repositorio: "https://github.com/onoue9/block-destroyer-craftyjs",
          url: "https://onoue9.github.io/block-destroyer-craftyjs/",
          img: "https://avatars.githubusercontent.com/u/55408729?s=280&v=4",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <main>
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
