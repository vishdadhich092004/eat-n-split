import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import { useState } from 'react';
import initialFriends from './initialFriends'
export default function App() {

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShow() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(newFriend) {
    setFriends(friends => [...friends, newFriend]);
    setShowAddFriend(false);
  }
  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  return <div className="app">
    <div className='sidebar'>
      <FriendsList
        friends={friends}
        onSelection={handleSelection}
        selectedFriend={selectedFriend} />
      {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      <Button handleOnClick={handleShow}>{showAddFriend ? "Close" : "Add Friends"}</Button>

    </div>
    {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
  </div>
}