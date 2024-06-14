import Button from "./Button"
export default function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={isSelected ? "selected" : undefined} >
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {
                friend.balance < 0 &&
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}$
                </p>
            }
            {
                friend.balance > 0 &&
                <p className="green">
                    {friend.name} owes you {Math.abs(friend.balance)}$
                </p>
            }
            {
                friend.balance === 0 &&
                <p className="">
                    You and {friend.name} are even
                </p>
            }
            <Button handleOnClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
        </li >
    )
}