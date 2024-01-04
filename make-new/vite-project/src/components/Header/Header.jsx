import styles from "./Header.module.scss";

export const Header = () => {
  const x = 10;

  return (
    <header className={styles.MainHeader}>
      <p>hej her hvad x er {x}</p>
    </header>
  );
};
