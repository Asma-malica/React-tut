import { useState } from "react";

export function Heart({ count, setCount }) {
    const [like, setLike] = useState(false);

    function handleLike() {
        if (like) { 
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLike(!like);
    }

    return (
        <span onClick={handleLike} style={{ color: 'red', cursor: 'pointer' }}>
            {
                like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
        </span>
    );
}
