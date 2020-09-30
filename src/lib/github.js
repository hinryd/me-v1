const username = process.env.GITHUB_USERNAME;

export async function getAllPublicRepos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return res.json();
}

export async function getUserInfo() {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
}
