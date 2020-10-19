import Head from 'next/head';

import Footer from '../components/Footer';
import Card from '../components/Card';
import Grid from '../components/Grid';
import ProfileCard from '../components/ProfileCard';

import { getAllPublicRepos, getUserInfo } from '../lib/github';
import { getAllPublicPosts } from '../lib/devto';
import styles from '../styles/index.module.css';

export async function getServerSideProps() {
  const repos = await getAllPublicRepos();
  const user = await getUserInfo();
  const posts = await getAllPublicPosts();
  return {
    props: {
      repos,
      user,
      posts,
    },
  };
}

export default function index({ repos, posts, user }) {
  console.log(repos);
  return (
    <>
      <Head>
        <title>@hnrysrc</title>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Me</h2>
        <ProfileCard user={user} />

        <h2 className={styles.title}>Recent</h2>
        <Grid>
          {repos
            .sort((a, b) => {
              return a.pushed_at < b.pushed_at ? 1 : -1;
            })
            .slice(0, 4)
            .map(repo => {
              return (
                <Card
                  key={repo.id}
                  url={repo.homepage}
                  title={repo.name}
                  desc={repo.description}
                />
              );
            })}
        </Grid>

        <h2 className={styles.title}>Blog</h2>
        <Grid>
          {posts
            .sort((a, b) => {
              return a.published_at < b.published_at ? 1 : -1;
            })
            .slice(0, 4)
            .map(post => {
              return (
                <Card
                  key={post.id}
                  url={post.url}
                  title={post.title}
                  desc={post.description}
                />
              );
            })}
        </Grid>
      </main>

      <Footer />
    </>
  );
}
