import styles from "./Header.module.css";

import todoLogo from "../assets/todo-logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={todoLogo} alt="Logo" />
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
  );
}
