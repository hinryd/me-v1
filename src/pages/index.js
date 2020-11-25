import Head from 'next/head';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import Grid from '../components/Grid';
import CardPrinter from '../components/CardPrinter';
import { getUserGithubInfo, getUserGithubPublicRepos } from '../lib/github';
import { getUserDevtoPublicPosts } from '../lib/devto';
import styles from '../styles/index.module.css';

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
  const githubConfig = {
    sortBy: 'pushed_at',
    link: 'homepage',
    title: 'name',
    desc: 'description',
  };

  const devtoConfig = {
    sortBy: 'published_at',
    link: 'url',
    title: 'title',
    desc: 'description',
  };

  return (
    <>
      <Head>
        <title>@hinryd</title>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Me</h2>
        <ProfileCard user={githubInfo} />

        <h2 className={styles.title}>Work</h2>
        <Grid>
          <CardPrinter arr={githubRepos} config={githubConfig} />
        </Grid>

        <h2 className={styles.title}>Blog</h2>
        <Grid>
          <CardPrinter arr={devtoPosts} config={devtoConfig} />
        </Grid>
      </main>

      <Footer />
    </>
  );
}
