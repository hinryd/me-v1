import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import s from './ProfileCard.module.css';

export default function Card({ user }) {
  return (
    <div className={s.card_container}>
      <img className={s.image} src={user.avatar_url} />

      <div className={s.text_container}>
        <h3 className={s.name}>{user.name}</h3>
        <p className={s.bio}>{user.bio}</p>
        <a className={s.social_link} href={user.html_url}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
