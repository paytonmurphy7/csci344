import React, {useState} from "react";

import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({token, likeId, postId}) {
    const [stateLikeId, setStateLikeId] = useState(likeId);

async function createLike() {
    const sendData = {
        post_id: postId,
    };
    console.log("creating a like...")
    const responseData = await postDataToServer(token, "/api/likes/", 
        sendData );
    console.log(responseData);
    setStateLikeId(responseData.id);

}
async function deleteLike() {
    console.log("deleting a like...");
    const responseData = await deleteDataFromServer(token, "/api/likes/" + stateLikeId);

    console.log(responseData);
    setStateLikeId(null);
}

    console.log(likeId);

    if (stateLikeId) {
        return (
            <button aria-label="Unlike This Post" onClick={deleteLike}><i className="fas text-red-700 fa-heart text-red-600"></i></button>
        );
    } else {
        return (
            <button aria-label="Like This Post" onClick={createLike}><i className="far fa-heart text-red-600"></i></button>
        );   
    } 
}