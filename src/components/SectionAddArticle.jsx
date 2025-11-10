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
      <form onSubmit={handle_submit}>
        <button type="submit">Add Article</button>
        <label htmlFor="input-article">Add Article: </label>
        <input
          type="text"
          id="input-article"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <span>(id - titolo - durata - descrizione)</span>
      </form>
    </>
  );
}
