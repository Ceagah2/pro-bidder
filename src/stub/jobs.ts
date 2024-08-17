export const jobs = [
  {
    id: 1,
    title: "Desenvolvimento de Website",
    description: "Criação de um site para uma empresa de tecnologia.",
    sponsor: "Tech Corp",
    eta: 35, // (soma das horas das tasks + 10%)
    tasks: [
      {
        id: 1,
        title: "Design de Interface",
        description: "Criação do layout e design das páginas.",
        isDone: false,
        eta: 10, // em horas
      },
      {
        id: 2,
        title: "Desenvolvimento Front-end",
        description: "Implementação do layout usando React.",
        isDone: false,
        eta: 12, // em horas
      },
      {
        id: 3,
        title: "Desenvolvimento Back-end",
        description: "Criação das APIs e integração com o banco de dados.",
        isDone: false,
        eta: 10, // em horas
      },
      {
        id: 4,
        title: "Testes",
        description: "Testes de usabilidade e performance.",
        isDone: false,
        eta: 8, // em horas
      },
    ],
  },
  {
    id: 2,
    title: "Criação de App Mobile",
    description: "Desenvolvimento de um aplicativo mobile para uma startup.",
    sponsor: "Startup X",
    eta: 27.5, // (soma das horas das tasks + 10%)
    tasks: [
      {
        id: 1,
        title: "Planejamento",
        description: "Definição das funcionalidades e wireframes.",
        isDone: true,
        eta: 8, // em horas
      },
      {
        id: 2,
        title: "Desenvolvimento UI",
        description: "Implementação do layout utilizando React Native.",
        isDone: false,
        eta: 12, // em horas
      },
      {
        id: 3,
        title: "Integração com API",
        description: "Conectar o app com o backend.",
        isDone: false,
        eta: 5, // em horas
      },
      {
        id: 4,
        title: "Publicação",
        description: "Publicar o app nas lojas da Apple e Google.",
        isDone: false,
        eta: 3, // em horas
      },
    ],
  },
];
