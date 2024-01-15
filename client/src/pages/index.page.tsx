import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const fetchedUsers = await apiClient.api.public.users.$get();
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <ul className={styles.users}>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
