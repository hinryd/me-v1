import Head from 'next/head';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { getAllPublicRepos, getUserInfo } from '../lib/github';
import { getAllPublicPosts } from '../lib/devto';

export async function getStaticProps() {
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

export default function index(props) {
  return (
    <>
      <Head>
        <title>hnrysrc</title>
      </Head>
      <Main {...props} />
      <Footer />
    </>
  );
}
