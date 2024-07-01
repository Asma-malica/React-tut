import { useState } from "react";
import Card from "./Card";
import MOVIE_LIST from "./movieListData";

const arr = MOVIE_LIST.map((value) => {
    return value.genre;
});
const options = Array.from(new Set(arr));

export default function MovieRating() {
    const [input, setInput] = useState(options[0]);
    const [average, setAverage] = useState(0);

    function handleChange(e) {
        // find average
        let ratings = MOVIE_LIST.filter(value => value.genre === e.target.value).map(value => value.rating);
        let total = ratings.reduce((prev, curr) => prev + curr);
        let result = total / ratings.length;
        setAverage(result);
        setInput(e.target.value);
    }
    return (
        <>
<h1 style={{ color: 'blue', textAlign: 'center' }}>MOVIE RATING APP</h1>
<h3><center>Total movies :  {MOVIE_LIST.length}</center></h3>
            <p><center>The average rating is : {average}</center></p>
           <div className="select-container">
            <select id="select" style = {{color: 'blue'}}value={input} onChange={handleChange}>
                
                {
                    options.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>;
                    })
                }
            </select>
            </div>
            <div className="card-container">
                {
                    MOVIE_LIST.filter(value => value.genre === input).map((movie, index) => {
                        return <Card movie={movie} key={index}></Card>;
                    })
                }
            </div>
        </>
    );
}