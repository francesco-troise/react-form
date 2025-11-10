import Header from "./components/Header";
import SectionAddArticle from "./components/SectionAddArticle";
import ListArticles from "./components/ListArticles";
import { useState } from "react";
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

  function handle_trash(key) {
    const filtered_articles = articles.filter((art) => art.id != key);
    setArticles(filtered_articles);
  }
  //"handle_trash" accetta l'id corrispondente all'oggetto a cui è legato il button
  //filtra poi lo state originario, conservando tutto, tranne l'oggeto con quell'id
  //cambia infine lo stato con il nuovo array filtrato

  return (
    <>
      <Header />

      <SectionAddArticle />

      {articles.map((art) => (
        <div className="wrapper" key={art.id}>
          <ListArticles {...art} />
          {/* Il tag "ListArticles" riceve lo spred del singolo oggetto "art" */}

          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              handle_trash(art.id);
              //Al click del button richiama la funzione "handle_trash" che accetto l'id del singolo oggetto "art"
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
