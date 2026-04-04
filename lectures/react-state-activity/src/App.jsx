import React, {useState} from "react";
import Carousel from "./Carousel";
import Galleries from "./Galleries";
import "./App.css";

export default function App() {
    let [activeIndex, setActiveIndex] = useState(0);
    const galleries = [
  {
    name: "Nature",
    photos: [
      "https://www.liveawilderlife.com/wp-content/uploads/2020/01/Graveyard-Fields-in-Asheville.jpg",
      "https://www.jasonweissphotography.com/images/xl/clements-sunset-hidden-lake-glacier-park.jpg",
      "https://www.pictorem.com/uploads/collection/S/SN3NMH9SUO/900_Shelia-Hunt-Photography_IMG_8804_1.jpg"
    ]
  },
  {
    name: "City",
    photos: [
      "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt1bee36a8af145afa/67c03a3fc1fe96c5ca54e61d/BCC-2024-EXPLORER-SEOUL-THINGS-TO-DO-AT-NIGHT-HEADER_MOBILE.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart",
      "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_329662223_ss_non-editorial_3_csm8lw?_a=BAVAZGDY0",
      "https://cliffsliving.com/wp-content/uploads/2023/02/Asheville_Skyline_v2_cmyk-e1587749234925.jpg"
    ]
  },
  {
    name: "Animals",
    photos: [
      "https://i.natgeofe.com/n/50b83c77-248c-4dcb-af77-1a80566e21f1/02-global-tiger-day-gallery.jpg",
      "https://panthera.org/sites/default/files/blog-post-images/7.14Bobcat%20yawns%20after%20nap.jpg",
      "https://media.gwnews.com/images/articles/1_arcticfox-t.JPG"
    ]
  }
];

    return (
        <div>
            <h1>This is a Gallery of Photos</h1>
            <Galleries galleries={galleries} 
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex} />
            <Carousel photos={galleries[activeIndex].photos} />
        </div>
    );
}
