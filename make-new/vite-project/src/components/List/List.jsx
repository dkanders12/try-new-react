import styles from "./List.module.scss";

export const List = (props) => {
  console.log(props.data);
  return (
    <ul className={styles.pretty}>
      {props.data.map((item, key) => {
        return <li key={key}>{item}</li>;
      })}
    </ul>
  );
};
