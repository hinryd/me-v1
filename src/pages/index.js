import Head from "next/head";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import Heading from "../components/Heading";
import Grid from "../components/Grid";
import Card from "../components/Card";
import { getUserGithubInfo, getUserGithubPublicRepos } from "../lib/github";
import { getUserDevtoPublicPosts } from "../lib/devto";

export async function getServerSideProps() {
  const githubInfo = await getUserGithubInfo();
  const githubRepos = await getUserGithubPublicRepos();
  const devtoPosts = await getUserDevtoPublicPosts();
  return {
    props: {
      githubInfo,
      githubRepos,
      devtoPosts,
    },
  };
}

export default function index({ githubInfo, githubRepos, devtoPosts }) {
  return (
    <>
      <Head>
        <title>@hinryd</title>
      </Head>

      <main className="flex flex-col mx-auto w-11/12 max-w-screen-md">
        <Heading>Me</Heading>
        <ProfileCard user={githubInfo} />

        <Heading>Work</Heading>
        <Grid>
          {githubRepos
            .filter((repo) => repo.homepage)
            .map((repo) => {
              return (
                <Card
                  key={repo.id}
                  url={repo.homepage}
                  title={repo.name}
                  desc={repo.description}
                  tags={[]}
                />
              );
            })}
        </Grid>

        <Heading>Blog</Heading>
        <Grid>
          {devtoPosts
            .sort((a, b) => {
              return a.published_at < b.published_at ? 1 : -1;
            })
            .slice(0, 4)
            .map((post) => {
              return (
                <Card
                  key={post.id}
                  url={post.url}
                  title={post.title}
                  desc={post.description}
                  tags={post.tag_list}
                />
              );
            })}
        </Grid>

        <Footer />
      </main>
    </>
  );
}
