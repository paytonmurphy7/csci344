import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
    const [profile, setProfile] = useState({});

    async function getProfile() {
        console.log("fetching profile...");
        const responseData = await getDataFromServer(token, "/api/profile/");
        console.log(responseData);
        setProfile(responseData);
    }


    // use effect afert page renders and when token changes
    useEffect(() => {
        if (token) {
            getProfile();
        }
    }, [token]);

    return (
        <header className="flex gap-3 items-center bg-white border p-3">
            <img
                src={profile.thumb_url}
                alt="Profile"
                className="rounded-full w-10 h-10"
            />
            <h2 className="font-bold text-gray-700">
                {profile.username}
            </h2>
        </header>
    );
}