import s from './Card.module.css';

export default function Card({ repo }) {
  return (
    <div className={s.container}>
      <img className={s.image} src={'https://picsum.photos/200'} />

      <div classname={s.text_container}>
        <h3 className={s.title}>{repo.name}</h3>
        <p className={s.description}>{repo.description}</p>
        <a href={repo.html_url}>Repo</a>
      </div>
    </div>
  );
}
