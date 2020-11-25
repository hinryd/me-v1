const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;
const header = {
  Authorization: `Token ${token}`,
};

export async function getUserGithubPublicRepos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    method: 'GET',
    header: header,
  });
  return res.json();
}

export async function getUserGithubInfo() {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    header: header,
  });
  return res.json();
}
