import styles from "./EmptyList.module.css";

import clipboard from "/src/assets/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
