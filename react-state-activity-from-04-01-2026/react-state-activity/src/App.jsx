import React, {useState, useEffect} from "react";
import Carousel from "./Carousel";
import Galleries from "./Galleries";
import "./App.css";

export default function App() {

    let [activeIndex, setActiveIndex] = useState(0);
    let[photos, setPhotos] = useState([]);

    async function getFlickrPhotos() {
            const url = galleries[activeIndex].endpoint;
            const response = await fetch(url);
            const data = await response.json();
            const arrOfStrings = arrOfObjects.map(obj => obj.img_url);
            console.log(data);
            setPhotos(arrOfStrings);
        
    }

    useEffect(()=> {
        getFlickrPhotos();
    }, [activeIndex]);

    const galleries = [
  {
    name: "Cats & Horses",
    endpoint: "https://www.apitutor.org/flickr/simple/?tags=cats%20and%20horses"
  },
  {
    name: "Snow Leapord",
    endpoint: "https://www.apitutor.org/flickr/simple/?tags=snow%20and%20leapord"
  },
  {
    name: "Asheville",
    endpoint: "https://www.apitutor.org/flickr/simple/?tags=asheville"
  },
  {
    name: "Tigers",
    endpoint: "https://www.apitutor.org/flickr/simple/?tags=tigers"
  },
];

    return (
        <div>
            <h1>This is a Gallery of Photos</h1>
            {/* sharing state between components often involves moving the
            state variable items to the parent and then passing those items in. */}
            <Galleries 
                galleries={galleries} 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} />

            <Carousel photos={photos} />
        </div>
    );
}
