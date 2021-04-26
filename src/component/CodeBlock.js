import React from "react";
import Coding from "../Coding.jpg";

export default function CodeBlock() {
    return (
        <main className="bg-blue-300 min-h-screen">
            <img src={Coding} className="mx-auto h-96 p-10"/>
            <article className="p-2">
                <h1 className="text-4xl cursive m-2 lg:mx-32 md:mx-24">Code Block!</h1>
                <h2 className="m-4 lg:mx-32 md:mx-24 text-lg text-blue-500">I heard about a duck...</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                    When i started to practice coding would crash into walls, staring at lines of codes
                    without understanding why it was not working. Then one of my friend the rubber duck, 
                    i was sceptical at first but it does work. It does allowed to take a step back and 
                    see a bigger picture or even just re-read the code and fix little errors like a bracket or
                    any other symbols.
                </p>
                <h2 className="m-4 lg:mx-32 md:mx-24 text-lg text-blue-500">Purpose and functions</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                    Sometimes a function will work the way it is intended to but will not the result expected. So 
                    i would ask take a step back and try to narrow down only what i need for the purpose of what i was looking
                    to achieve.
                </p>
                <h2 className="m-4 lg:mx-32 md:mx-24 text-lg text-blue-500">Time priority</h2>
                <p className="cursive m-3 lg:mx-32 md:mx-24">
                    I realised quickly instead of being stuck on the same issue for hours to switch to another
                    project or other aspect of the same project. My mind would take a break from the current issue
                    and would come back clearer to it later. Many times i have been blocked on a code line for a few hours
                    then take a break and fix it in two minutes.
                </p>
            </article>    
        </main>
    )
}
