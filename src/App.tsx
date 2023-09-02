import AddFriendForm from './components/AddFriendFrom';
import { FriendList } from './components/FriendList';

function App() {
  return (
    <div className="w-full p-[20px]">
      <h1>My simple Dexie app</h1>

      <hr className="h-[2px] bg-black mt-[12px] mb-[12px]" />

      <h2>Add Friend</h2>
      <AddFriendForm defaultAge={21} />
      <hr className="h-[2px] bg-black mt-[12px] mb-[12px]" />

      <h2 className="mb-[12px]">Friend List</h2>
      <FriendList minAge={18} maxAge={65} />
    </div>
  );
}

export default App;
