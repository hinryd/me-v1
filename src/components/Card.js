import { useEffect, useRef, useState } from 'react';
import styles from './Card.module.css';

export default function Card({ url, title, desc }) {
  const cardRef = useRef(null);
  const [customTags, setCustomTags] = useState([]);

  useEffect(() => {
    url && (cardRef.current.href = url);
    switch (title) {
      case 'v1':
        setCustomTags(['nextjs', 'html', 'react', 'javascript']);
        break;
      case 'drawing-canvas':
        setCustomTags(['html5', 'nextjs', 'canvas', 'drawing']);
        break;
      default:
        break;
    }
  }, []);

  return (
    <a className={styles.card_container} ref={cardRef}>
      <article className={styles.text_container}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {customTags.map(tag => {
            return <span className={styles.tag}>{tag}</span>;
          })}
        </div>
        <figcaption className={styles.description}>{desc}</figcaption>
      </article>
    </a>
  );
}
