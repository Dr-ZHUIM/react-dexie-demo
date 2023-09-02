import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';
import FriendItem from './FriendItem';

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
    <ul className="flex-col gap-[20px] w-full">
      {friends?.map((friend) => (
        <FriendItem key={friend.id} data={{ ...friend }} />
      ))}
    </ul>
  );
}
