import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Post from "./Post"
// job: fetch post data form the server and iterate through each element and draws
// a post component
export default function Posts({ token }) {

    // state variables: every time a state variable gets set,
    // it redraws the component
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        // fetches data from ___
        const data = await getDataFromServer(token, "/api/posts");

        //printing that data to the screen
        console.log(data);

        //setting a state variable
        console.log("Setting a state variable to redraw the screen after the posts are set...");
        setPosts(data); 
    }


    // useeffect is a built-in function designed to handle "side effects"
    // when the page first loads
    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts);

    function outputPost(postObj){
        return <Post token={token} key={postObj.id} postData={postObj}/>
    }

    return (<div>
               {
                posts.map(outputPost)
              }
    </div>
    );
}
