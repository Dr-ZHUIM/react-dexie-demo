import { db } from '@/db/db';

type Modal = {
  data: Friend;
};

export default function FriendItem({ data }: Modal) {
  const handleDelete = () => {
    if (data.id && confirm('Are you sure you want to delete this?')) {
      db.friends.delete(data.id);
    }
  };

  return (
    <li className="bg-[#fff] w-full shadow-lg grid grid-cols-3 gap-[2%]">
      <div className="p-[20px]">Name: {data.name || 'Unrecorded😢'}</div>
      <div className="p-[20px]">Age: {data.age}</div>
      <div className="flex justify-center items-center">
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
}
