import Card from './Card';

export default function CardPrinter({ arr, config }) {
  const { sortBy, link, title, desc } = config;

  if (arr.message) {
    arr = [
      {
        [link]: 'https://example.com',
        [title]: 'Error',
        [desc]: arr.message,
      },
    ];
  } else {
    arr
      .sort((a, b) => {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      })
      .slice(0, 4)
      .filter(item => item[link]);
  }

  return (
    <>
      {arr.map(item => {
        return (
          <Card
            key={item.id}
            url={item[link]}
            title={item[title]}
            desc={item[desc]}
          />
        );
      })}
    </>
  );
}
