// Heart.js (or wherever your Heart component is defined)
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function Heart({ count, setCount }) {
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
        <span onClick={handleLike} style={{ color: 'red' }}>
            <FontAwesomeIcon icon={like ? solidHeart : regularHeart} />
        </span>
    );
}

export default Heart;
