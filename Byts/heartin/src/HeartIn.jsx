import { useState } from "react";

function Heart({ count, setCount }) {
    const [like, setLike] = useState(false);
    function handleLike() {
        // false -> true     : like    +1
        // true  -> false    : unlike  -1
        if (like) {
            setCount(count - 1);
        }
        else {
            setCount(count + 1);
        }
        setLike(!like);
    }
    return (
        <span onClick={handleLike} style={{ color: 'red' }}>
            {
                like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
        </span>
    );
}

export default function HeartIn() {
    // let count = 0;
    const [count, setCount] = useState(0);
    return (
        <>
            <p> the like count is {count} </p>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
            <Heart count={count} setCount={setCount}></Heart>
        </>
    )
}