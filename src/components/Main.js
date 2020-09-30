import Card from '../components/Card';
import Grid from '../components/Grid';
import ProfileCard from '../components/ProfileCard';
import s from './Main.module.css';

export default function Main({ repos, user }) {
  return (
    <main className={s.main}>
      <h2 className={s.title}>Me</h2>
      <Grid>
        <ProfileCard user={user} />
      </Grid>
      <h2 className={s.title}>Work</h2>
      <Grid>
        {repos.map(repo => {
          return <Card key={repo.id} repo={repo} />;
        })}
      </Grid>
      <h2 className={s.title}>Work</h2>
      <Grid>
        {repos.map(repo => {
          return <Card key={repo.id} repo={repo} />;
        })}
      </Grid>
    </main>
  );
}
