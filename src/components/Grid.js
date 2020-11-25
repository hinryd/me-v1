import styles from './Grid.module.css';

export default function Grid({ children }) {
  return <div className={styles.grid_container}>{children}</div>;
}
