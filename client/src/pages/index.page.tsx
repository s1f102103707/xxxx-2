import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { User } from '$/api/@types';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskContent, setTaskContent] = useState('');

  const handleTaskTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value);
  const handleTaskContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTaskContent(e.target.value);

  const createTask = async () => {
    if (!taskTitle) return;
    await apiClient.private.tasks.$post({
      body: {
        title: taskTitle,
        content: taskContent
      }
    });
    setTaskTitle('');
    setTaskContent('');
  };

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <div className={styles.createTask}>
          <input
            type="text"
            placeholder="タスクのタイトル"
            value={taskTitle}
            onChange={handleTaskTitleChange}
          />
          <textarea
            placeholder="タスクの内容"
            value={taskContent}
            onChange={handleTaskContentChange}
          />
          <button onClick={createTask}>タスクを作成</button>
        </div>
      </div>
    </>
  );
};

export default Home;
