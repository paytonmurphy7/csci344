import React from "react";
import { Image } from 'antd';
import AntCard from "./components/AntCard";
import Card from "./components/Card";


export default function App() {

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <Card
                name="Sample item"
                image_url="https://i.ytimg.com/vi/yHcIM6mEKhk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGkds2VP3XyNmBGaihVhTH_ENJ3Q"
                description="A short description goes here."
                />
                <Card
                name="Cute Pony"
                image_url="https://img.freepik.com/free-photo/vertical-shot-brown-pony-grass-field-cloudy-weather_181624-15253.jpg?semt=ais_incoming&w=740&q=80"
                description="A short description goes here."
                />
                <Image
                width={200}
                alt="basic"
                src="https://i0.wp.com/snowleopard.org/wp-content/uploads/2023/10/SnowLeopardTrust_Mongolia-6.jpg?fit=1716%2C965&ssl=1"
                />
                <AntCard
                name="Ant Card"
                image_url="https://ichef.bbci.co.uk/news/1024/branded_news/004d/live/e2529d00-42ee-11f0-9630-fd015488de94.jpg"
                description="Hello"
/>

            </main>
        </>
    );
}