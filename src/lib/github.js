const username = process.env.GITHUB_USERNAME;

export async function getUserGithubPublicRepos() {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=pushed`
  );
  return res.json();
}

export async function getUserGithubInfo() {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
}
