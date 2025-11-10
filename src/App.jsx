import Header from "./components/Header";
import SectionAddArticle from "./components/SectionAddArticle";
import ListArticles from "./components/ListArticles";
import DeleteButton from "./components/DeleteButton";
import { useState } from "react";

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

  const [articles, setArticles] = useState(array_articles);

  return (
    <>
      <Header />

      <div className="container d-flex justify-content-center my-4">
        <SectionAddArticle setArticles={setArticles} />
        {/*SectionAddArticle deve essere in grado di modificare lo "state" articles*/}
      </div>

      <div className="container">
        <div className="row">
          {articles.map((art) => (
            <div className="col-12 mb-4" key={art.id}>
              <div className="d-flex flex-column h-100">
                <ListArticles {...art} />
                {/* Il tag "ListArticles" riceve lo spred del singolo oggetto "art" */}
                <div className="mt-2">
                  <DeleteButton
                    articles={articles}
                    delete_ID={art.id}
                    setArticles={setArticles}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
