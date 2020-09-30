import s from './Card.module.css';

export default function Card({ data }) {
  return (
    <a className={s.card_container} href={data?.html_url ?? data.url}>
      {/* <img className={s.image} src={pic.download_url} /> */}

      <div className={s.text_container}>
        <h3 className={s.title}>{data?.title ?? data.name}</h3>
        <p className={s.description}>{data.description}</p>
      </div>
    </a>
  );
}
