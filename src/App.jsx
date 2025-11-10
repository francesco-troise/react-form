import Header from "./components/Header";
import SectionAddArticle from "./components/SectionAddArticle";
import ListArticles from "./components/ListArticles";
import { useState } from "react";
import DeleteButton from "./components/DeleteButton";
//Import di "useState" per aver accesso ad uno "state" che accolga l'array articles

function App() {
  const array_articles = [
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
  //Array di dati

  const [articles, setArticles] = useState(array_articles);
  //Dichiarazione dello "state"

  return (
    <>
      <Header />

      <SectionAddArticle />

      {articles.map((art) => (
        <div className="wrapper" key={art.id}>
          <ListArticles {...art} />
          {/* Il tag "ListArticles" riceve lo spred del singolo oggetto "art" */}

          <DeleteButton
            articles={articles}
            delete_ID={art.id}
            setArticles={setArticles}
          />
        </div>
      ))}
    </>
  );
}

export default App;
