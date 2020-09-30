import Card from '../components/Card';
import Grid from '../components/Grid';
import ProfileCard from '../components/ProfileCard';
import s from './Main.module.css';

export default function Main({ repos, posts, user }) {
  return (
    <main className={s.main}>
      {/* Me Section */}
      <h2 className={s.title}>Me</h2>
      <ProfileCard user={user} />

      {/* Work Section */}
      <h2 className={s.title}>Work</h2>
      <Grid>
        {repos.map(repo => {
          return <Card key={repo.id} data={repo} />;
        })}
      </Grid>

      {/* Blog Section */}
      <h2 className={s.title}>Blog</h2>
      <Grid>
        {posts.map(post => {
          return <Card key={post.id} data={post} />;
        })}
      </Grid>
    </main>
  );
}
