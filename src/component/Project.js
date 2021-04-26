import React from "react";
import {Link} from "react-router-dom";
import spellbook from "../spellbook.jpeg";
import UC from "../UC.jpeg";


export default function Project() {
    return (
        <main className="bg-blue-400 min-h-screen p-12">
    <div className="container">
        <h1 className="text-5xl flex justify-center cursive">Project page</h1>
        <h2 className="text-lg flex justify-center cursive pb-10">Applied skills and knowledge</h2>
        <div className="animate-fade-in-up grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article>
                <a href="https://kaddrick.github.io/CedricsCaptivatingCompendium/start.html" target="_blank">
                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-600">
                    <img src={spellbook} className="absolute object-cover w-full h-full"/>
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 bg-opacity-75 rounded">Spell Book</h3>
                    </span>
                </span>
                </a>
            </article>
            <article>
                <Link>
                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-600">
                <img src={UC} className="absolute object-cover w-full h-full"/>
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 bg-opacity-75 rounded">Under Construction</h3>
                    </span>
                </span>
                </Link>
            </article>
            <article>
                <Link>
                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-600">
                <img src={UC} className="absolute object-cover w-full h-full"/>
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 bg-opacity-75 rounded">Under Construction</h3>
                    </span>
                </span>
                </Link>
            </article>
            
        </div>
    </div>
</main>)
}