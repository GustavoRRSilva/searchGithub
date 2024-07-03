import { BsSearch } from "react-icons/bs";
import styles from "./search.module.css"
export default function Search() {
  return (
    <div>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite o nome do usuario"
        />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
