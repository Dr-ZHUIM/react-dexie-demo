import { db } from '@/db/db';
import { useId, useState } from 'react';

type FriendForm = {
  defaultAge: number;
};

export default function AddFriendForm({ defaultAge = 21 }: FriendForm) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState('');

  const nameId = useId();
  const ageId = useId();

  async function addFriend() {
    try {
      if (
        !name &&
        !confirm('Are you sure you want to add a nameless friend?')
      ) {
        return;
      }
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
    <div className="flex flex-col">
      <h3>Form Status: {status}</h3>
      <div className="grid grid-cols-3">
        <div className="flex">
          <label htmlFor={nameId}>Name: </label>
          <input
            id={nameId}
            className="border-solid border-[1px] pl-[12px] pr-[12px]"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="flex">
          <label htmlFor={ageId}>Age: </label>
          <input
            id={ageId}
            className="border-solid border-[1px]  pl-[12px] pr-[12px"
            type="number"
            value={age}
            onChange={(ev) => setAge(Number(ev.target.value))}
          />
        </div>
        <div className="flex justify-center items-center">
          <button onClick={addFriend} className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
