import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';

type QueryFilter = {
  minAge: number;
  maxAge: number;
};

export function FriendList({ maxAge, minAge }: QueryFilter) {
  const friends = useLiveQuery(async () => {
    const friends = await db.friends
      .where('age')
      .between(minAge, maxAge)
      .toArray();
    return friends;
  }, [minAge, maxAge]);

  return (
    <ul>
      {friends?.map((friend) => (
        <li key={friend.id}>
          {friend.name}, {friend.age}
        </li>
      ))}
    </ul>
  );
}
