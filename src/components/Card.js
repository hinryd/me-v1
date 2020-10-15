import { useEffect, useRef } from 'react';
import styles from './Card.module.css';

export default function Card({ url, title, desc }) {
  const cardRef = useRef(null);
  useEffect(() => {
    url && (cardRef.current.href = url);
  }, []);

  return (
    <a className={styles.card_container} ref={cardRef}>
      <article className={styles.text_container}>
        <h3 className={styles.title}>{title}</h3>
        <figcaption className={styles.description}>{desc}</figcaption>
      </article>
    </a>
  );
}
