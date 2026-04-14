import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {
    const [stories, setStories] = useState([]);

    async function getStories() {
        console.log("getting stories...");
        const responseData = await getDataFromServer(token, "/api/stories/");
        console.log(responseData);
        setStories(responseData);
    }

    useEffect(() => {
        if (token) {
            getStories();
        }
    }, [token]);

    function getStory(storyObj) {
        return (
            <div
                key={storyObj.id}
                className="flex flex-col items-center justify-center"
            >
                <img
                    src={storyObj.user.thumb_url}
                    alt="Stories"
                    className="rounded-full border-2 p-[2px] w-14 h-14"
                />
                <p className="text-xs text-gray-500">
                    {storyObj.user.username}
                </p>
            </div>
        );
    }

    return (
        <header className="flex gap-5 bg-white border p-3 overflow-x-auto mb-6">
            {stories.map(getStory)}
        </header>
    );
}