export default function Card({ url, title, desc, tags }) {
  return (
    <a
      href={url}
      className="bg-white shadow-xl rounded-xl transform hover:scale-105"
    >
      <article className="flex flex-col justify-between m-3 h-28 w-34">
        <div>
          <h3 className="font-bold truncate">{title}</h3>
          {tags.map((tag, ind) => {
            return (
              <span key={ind} className="bg-green-200 p-1 mr-2 rounded">
                {tag}
              </span>
            );
          })}
        </div>
        <figcaption className="truncate">{desc}</figcaption>
      </article>
    </a>
  );
}
