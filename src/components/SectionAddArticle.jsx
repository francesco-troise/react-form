import { useState } from "react";

export default function SectionAddArticle({ setArticles }) {
  const [input, setInput] = useState("Marco");

  const handle_submit = (event) => {
    event.preventDefault();

    const parts = input.split("-");

    const new_item = {
      id: parts[0].trim(),
      id_corso: parts[1].trim(),
      durata: Number(parts[2].trim()),
      descrizione: parts[3].trim(),
    };

    setArticles((prev) => [...prev, new_item]);
    setInput("");
  };

  return (
    <>
      <div className="container d-flex justify-content-center my-4">
        <form onSubmit={handle_submit} className="w-50">
          <div className="mb-3">
            <label htmlFor="input-article" className="form-label">
              Add Article:{" "}
            </label>
            <input
              type="text"
              id="input-article"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control"
              placeholder="id - titolo - durata - descrizione"
            ></input>
            <span className="form-text">
              (id - titolo - durata - descrizione)
            </span>
          </div>
          <button type="submit">Add Article</button>
        </form>
      </div>
    </>
  );
}
