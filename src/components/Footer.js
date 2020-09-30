import s from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className={s.footer}>
      <p className={s.text}>
        Copyright <FontAwesomeIcon icon={faCopyright} size='xs' /> 2020
      </p>
    </div>
  );
}
