import s from './ProfileCard.module.css';

export default function Card({ user }) {
  return (
    <div className={s.container}>
      <img className={s.image} src={user.avatar_url} />

      <div classname={s.text_container}>
        <h3 className={s.title}>{user.name}</h3>
        <p className={s.description}>{user.bio}</p>
        <a href={user.html_url}>Repo</a>
      </div>
    </div>
  );
}
