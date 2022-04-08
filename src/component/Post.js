import React from "react";
import {Link} from "react-router-dom";
import travel from "../travel.jpg";
import DNDi from "../DNDi.jpeg";
import Coding from "../Coding.jpg";
import Travel from "./Travel";

export default function Post() {
    return (
        <main className="bg-blue-400 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Articles</h1>
                <h2 className="text-lg flex justify-center cursive mb-12">what's new?</h2>
                <div className="animate-fade-in-up grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article>
                        <Link to='./Travel'>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-600">
                            <img src={travel} className="absolute object-cover w-full h-full"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 bg-opacity-75 rounded">Travel</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    <article>
                        <Link to='./DND'>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-600">
                            <img src={DNDi} className="absolute object-cover w-full h-full"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 bg-opacity-75 rounded">Dungeon and Dragons</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    <article>
                        <Link to='./CodeBlock'>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-600">
                            <img src={Coding} className="absolute object-cover w-full h-full"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 bg-opacity-75 rounded">Code Block!</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    
                </div>
            </section>
        </main>
    )
}
