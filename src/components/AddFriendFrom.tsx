import { db } from '@/db/db';
import { useState } from 'react';

type FriendForm = {
  defaultAge: number;
};

export default function AddFriendForm({ defaultAge = 21 }: FriendForm) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState('');

  async function addFriend() {
    try {
      const id = await db.friends.add({
        name,
        age,
      });
      setStatus(`Friend ${name} successfully added. Got id ${id}`);
      setName('');
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return (
    <>
      <p>{status}</p>
      Name:
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      Age:
      <input
        type="number"
        value={age}
        onChange={(ev) => setAge(Number(ev.target.value))}
      />
      <button onClick={addFriend}>Add</button>
    </>
  );
}
