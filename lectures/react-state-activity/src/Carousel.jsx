import React, {useState} from "react";
import "./Carousel.css";

export default function Carousel({ photos, galleries }) {
    // declare your state variables here
    // first element in the array is the state variable
    // second element is the state variable setter, which is responsible for;
    // 1.
    // 2.
    const [index, setIndex] = useState(0);

    function next() {
        console.log("Next");
        if (index === 2) {
            setIndex(0); 
        } else {
            setIndex(index+1);
        setIndex(index+1)
        }
    }

    function previous() {
        console.log("Previous");
        if (index === 0) {
            setIndex(0); 
        } else {
            setIndex(index-1);
        setIndex(index-1)
        }
    }

    // photos is a list of strings that represent image paths
    console.log(photos);
    //let index = 0;
    return (
        <div className="carousel">
            {/* display the first image in the gallery array below */}
            <img src={photos[index]}/>
            {/* also display a "Photo X of Y" message below the image */}
            <p> Showing photo {index+1} of {photos.length} </p>
            <button onClick={previous}> Previous </button>
            <button onClick={next}> Next </button>
        </div>
    );
}
