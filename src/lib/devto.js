export async function getAllPublicPosts() {
  const res = fetch('https://dev.to/api/articles?username=kaeptnkrunch');
  return (await res).json();
}
