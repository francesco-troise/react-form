export default function ListArticles({ id_corso, durata, descrizione }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{id_corso}</h3>
      </div>
      <div className="card-body">
        <p className="card-text">{descrizione}</p>
      </div>
      <div className="card-footer">
        <span className="card-text">Durata: {durata}mesi</span>
      </div>
    </div>
  );
}
