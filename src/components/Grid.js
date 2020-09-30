import s from './Grid.module.css';

export default function Grid({ children }) {
  return <div className={s.grid_container}>{children}</div>;
}
