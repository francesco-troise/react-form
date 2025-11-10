export default function DeleteButton({ articles, delete_ID, setArticles }) {
  function handle_trash(delete_ID) {
    const filtered_articles = articles.filter((art) => art.id != delete_ID);
    setArticles(filtered_articles);
    //"handle_trash" accetta l'id corrispondente all'oggetto a cui è legato il button
    //filtra poi lo state originario, conservando tutto, tranne l'oggeto con quell'id
    //cambia infine lo stato con il nuovo array filtrato
  }

  return (
    <button
      className="btn btn-sm btn-danger"
      onClick={() => {
        handle_trash(delete_ID);
        //Al click del button richiama la funzione "handle_trash" che accetto l'id del singolo oggetto "art"
      }}
    >
      <i className="bi bi-trash"></i>
    </button>
  );
}
