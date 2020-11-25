import Card from './Card';
import { useEffect } from 'react';

export default function CardPrinter({ arr, config }) {
  const { sortBy, link, title, desc } = config;

  useEffect(() => {
    if (arr.message) {
      arr = {
        [link]: 'https://example.com',
        [title]: 'Error',
        [desc]: arr.message,
      };
    }
  }, []);

  return (
    <>
      {arr
        .sort((a, b) => {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        })
        .filter(item => item[link])
        .slice(0, 4)
        .map(item => {
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
