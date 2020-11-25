const username = process.env.DEVTO_USERNAME;

export async function getUserDevtoPublicPosts() {
  const res = await fetch(`https://dev.to/api/articles?username=${username} `);
  return res.json();
}
