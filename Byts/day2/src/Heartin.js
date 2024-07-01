import { useState } from "react";
import { Heart } from "./Heart";

export default function Heartin() {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <p>The click count is {count}</p>
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <Heart key={index} count={count} setCount={setCount} />
                ))
            }
        </>
    );
}
