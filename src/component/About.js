import React from "react";
import profile from "../profile.jpg"

export default function About() {
    return (
        <main className="min-h-screen bg-blue-300 ">
            <section className="flex">
            <article className="block justify-center lg:mx-64 md:mx-52 sm:mx-32 bg-gray-800 my-12 rounded-lg animate-fade-in-down border-gray-500 border-4">
                <img src={profile} className="h-52 rounded-full mx-auto m-4"/>
                <h1 className="text-white text-3xl cursive m-4">Who am i ?</h1>
                <p className="text-white cursive m-4">
                Born in France and moved to the UK in 2013, i have worked for the past 8 years in hospitality industry
                    during the second lockdown i decided it was time for a change. I decided to learn coding, i started with
                    a free app then moved to tutorial and practice. Then in February and March i passed two MTAs to validate
                    my skills. 
                </p>
                <p className="text-white cursive m-4">
                I I am currently as well a Dungeon Master for my group of friends playing Dungeon and Dragons. 
                This is one of my hobby i have been able to pursue despite the current pandemic, we play via zoom
                and it inspired my first big project (see the spell sheet on the project page).
                </p>
                <p className="text-white cursive m-4">
                    Another hobby of mine is travelling i have travelled through most of Europe but also outside of it.
                    I have been lucky enough to go to Egypt see the pyramids, to Norway in the Arctic circle and see the northern
                    lights, climb to the Tiger Cave Temple in Krabi in Thailand. All amazing memories and i definitely looking
                    forward to make more.
                </p>
            </article>
            </section>
        </main>
    )
}