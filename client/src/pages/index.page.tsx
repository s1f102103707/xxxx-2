import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [teams, setTeams] = useState<TeamModel[]>([]);

  const fetchTeams = async () => {
    const fetchedTeams = await apiClient.api.public.teams.$get();
    setTeams(fetchedTeams);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <ul className={styles.teams}>
          {teams.map((team) => (
            <li key={team.id}>{team.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
