import React from "react";
import travel from "../travel.jpg"



export default function Travel() {
    return (
        <main class="bg-blue-300 min-h-screen">
            <img src={travel} className="h-96 mx-auto pt-12" />
            <article className="p-2">
                <h1 className="text-4xl cursive m-2 lg:mx-32 md:mx-24">Travel</h1>
                <h2 className="m-4 lg:mx-32 md:mx-24 text-lg text-blue-700">Journey to reality</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                    Travelling has been one of the greatest experience in my life, it allows to learn new things but allows
                    challenge our assumptions on the world and make our opinions and views. Learning about the pyramids in a book
                    and see them in real life are two very different things. And it is the same for everything, real life experience
                    will never surpass what the book can teach us. 
                </p>
                <h2 className="m-4 lg:mx-32 md:mx-24 text-lg text-blue-700">Solo or tour group ?</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                While travelling in a tour group is more expensive and do not give much freedom to be spontaneous,
                it will provide guidance to places and bring more safety. I did travel with a tour group in Egypt and 
                i believe for some countries it is safer to do so.
                </p>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                    Travelling on your own can be challenging but also rewarding while you don't need to stick a strict itinerary 
                    you do have to make one yourself. But outside of group you can decided in the morning to leave for another town
                    you didn't plan to go first.
                </p>
                <h2 className="m-4 lg:mx-32 md:mx-24 text-lg text-blue-700">Language barrier</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                Most countries have hospitality staff speaking english nowadays but learning a few words of the local language can go a long way.
                Tourists get a bad image in most countries so sometimes showing your making an effort to be understood.
                </p>
            </article>
        </main>
    )
}
