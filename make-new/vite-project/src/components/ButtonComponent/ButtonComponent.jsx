import styles from "./ButtonComponent.module.scss";

export const ButtonComponent = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.primaryButton}>Click me</button>
    </div>
  );
};
