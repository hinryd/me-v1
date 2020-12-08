export default function Card({ url, title, desc, tags }) {
  return (
    <a
      href={url}
      className="bg-white shadow-xl rounded-xl transition duration-500 ease-in-out transform hover:scale-105"
    >
      <article className="flex flex-col justify-between m-3 h-28 w-34">
        <div>
          <h3 className="font-bold text-lg truncate">{title}</h3>
          {tags.map((tag, ind) => {
            return (
              <span
                key={ind}
                className="bg-green-100 p-1 mr-1 rounded font-serif text-xs"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <figcaption className="inline-block font-mono overflow-hidden">
          {desc}
        </figcaption>
      </article>
    </a>
  );
}
