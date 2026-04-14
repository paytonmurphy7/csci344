import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Suggestions({ token }) {
    const [suggestions, setSuggestions] = useState([]);

    async function getSuggestion() {
        console.log("getting suggestions...");
        const responseData = await getDataFromServer(token, "/api/suggestions/");
        console.log(responseData);

        if (Array.isArray(responseData)) {
            setSuggestions(responseData);
        }
    }

    useEffect(() => {
        if (token) {
            getSuggestion();
        }
    }, [token]);

    function getSuggestions(userObj) {
        return (
            <div
                key={userObj.id}
                className="flex justify-between items-center mb-3"
            >
                <div className="flex items-center gap-3">
                    <img
                        src={userObj.thumb_url}
                        alt="Suggestions"
                        className="rounded-full w-10 h-10"
                    />
                    <div>
                        <p className="font-bold text-sm">
                            {userObj.username}
                        </p>
                        <p className="text-xs text-gray-400">
                            Suggested For Uou
                        </p>
                    </div>
                </div>

                <button className="text-blue-600 text-sm font-bold">
                    Follow
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white border p-3 mt-4">
            <p className="text-gray-400 font-bold mb-4">
                Suggestions For You
            </p>

            {suggestions.map(getSuggestions)}
        </div>
    );
}
//very confused on how to get the actual suggestions to show up and
// i was not sure where to go from here