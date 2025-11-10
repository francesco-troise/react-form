import Header from "./components/Header";

import ListArticles from "./components/ListArticles";

function App() {
  const articles = [
    {
      id: "A1",
      id_corso: "Corso Full-stack Web Development -FULL TIME-",
      durata: 6,
      descrizione:
        "Stellae bellum gerunt, heroēs fortiter adversus tenebras pugnant. Per aspera ad astra",
    },
    {
      id: "B2",
      id_corso: "Corso Full-stack Web Development -PART TIME-",
      durata: 6,
      descrizione:
        "Stellae bellum gerunt, heroēs fortiter adversus tenebras pugnant. Per aspera ad astra",
    },
    {
      id: "C3",
      id_corso: "Corso Gaming Development -FULL TIME",
      durata: 6,
      descrizione:
        "Stellae bellum gerunt, heroēs fortiter adversus tenebras pugnant. Per aspera ad astra",
    },
    {
      id: "D4",
      id_corso: "Corso Gaming Development -PART TIME-",
      durata: 6,
      descrizione:
        "Stellae bellum gerunt, heroēs fortiter adversus tenebras pugnant. Per aspera ad astra",
    },
  ];

  return (
    <>
      <Header />

      {articles.map((art) => (
        <ListArticles {...art} />
      ))}
    </>
  );
}

export default App;
