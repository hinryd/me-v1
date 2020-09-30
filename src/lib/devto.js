export async function getAllPublicPosts() {
  const res = await fetch('https://dev.to/api/articles?username=kaeptnkrunch');
  return res.json();
}
