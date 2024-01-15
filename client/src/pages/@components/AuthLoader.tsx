import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { supabase } from 'src/utils/supabase';

export const AuthLoader = () => {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const handleAuthStateChange = async (event: string, session: any) => {
      if (!session) {
        if (user) {
          await apiClient.api.private.users._userId(user.id).$delete().catch(returnNull);
          setUser(null);
        }
        return;
      }

      if (!user || user.id !== session.user.id) {
        await updateUser(session);
      }
    };

    const updateUser = async (session: any) => {
      const { id, email, user_metadata } = session.user;
      await apiClient.api.private.users
        ._userId(id)
        .$put({ body: { email, name: user_metadata.full_name } })
        .catch(returnNull);
      const updatedUser = await apiClient.api.private.users._userId(id).$get().catch(returnNull);
      setUser(updatedUser);
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
      subscription.unsubscribe();
    };
  }, [user, setUser]);

  return <></>;
};
