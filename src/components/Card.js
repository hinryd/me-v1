import s from './Card.module.css';

export default function Card({ data }) {
  const random = parseInt(Math.random() * 100);
  const pic = `https://picsum.photos/300?random=${random}`;

  return (
    <a className={s.card_container} href={data?.html_url ?? data.url}>
      <img className={s.image} src={pic} />

      <div className={s.text_container}>
        <h3 className={s.title}>{data?.title ?? data.name}</h3>
        <p className={s.description}>{data.description}</p>
      </div>
    </a>
  );
}
