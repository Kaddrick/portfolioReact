import React from "react";
import DNDi from "../DNDi.jpeg";

export default function DND() {
    return (
        <main className="bg-red-500 min-h-screen">
            <img src={DNDi} className="mx-auto h-96 p-10"/>
            <article className="p-2">
                <h1 className="text-4xl cursive m-2 lg:mx-32 md:mx-24">Dungeon and Dragons</h1>
                <h2 className="m-4 lg:mx-32 text-lg text-yellow-500">Game and story telling</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                    I got into DND a few years back, what interested me first was the ability to have your character do more than
                    what you can see in video games. Furthermore, the .
                </p>
                <h2 className="m-4 lg:mx-32 md:mx-24 text-lg text-yellow-500">Running sessions or dming</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                    After trials and errors, running session is a very interesting hobby i am writting stories where my players are 
                    the mains characters. They can either become heroes or vilains, it is interesting to see what players come up with
                    to get out of bad situations. There is no right or wrong answers, just actions and their consequences.
                </p>
            </article>    
        </main>
    )
}
