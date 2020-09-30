import s from './Card.module.css';

export default function Card({ repo, post }) {
  return (
    <div className={s.container}>
      <img className={s.image} src={'https://picsum.photos/200'} />

      <div classname={s.textbox}>
        <h3 className={s.title}>{post ? post.title : repo.name}</h3>
        <p className={s.description}>
          {post
            ? post.description.length > 50
              ? post.description.substring(0, 40) + '...'
              : post.description
            : repo.description}
        </p>
        <a href={post ? post.url : repo.html_url}>{post ? 'Post' : 'Repo'}</a>
      </div>
    </div>
  );
}
