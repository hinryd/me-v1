import Head from 'next/head';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { getAllPublicRepos, getUserInfo } from '../lib/github';

export async function getStaticProps() {
  const repos = await getAllPublicRepos();
  const user = await getUserInfo();
  return {
    props: {
      repos,
      user,
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
