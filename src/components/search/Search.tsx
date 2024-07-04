type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
import { BsSearch } from "react-icons/bs";

import { useState, KeyboardEvent } from "react";
import styles from "./search.module.css";
export default function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
        loadUser(userName)
    }
  };

  return (
    <div className={styles.search}>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite o nome do usuario"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
