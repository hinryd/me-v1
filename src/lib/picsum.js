export async function getRandomPic(width, height) {
  const res = await fetch(`https://picsum.photos/${width}/${height}`);
  return res;
}
