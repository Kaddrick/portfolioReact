import React from "react";
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import socialIcon from "react-social-icons/build/social-icon";


export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container flex mx-auto justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    className="inflex-flex items-center py-6 px-3 text-blue-200 text-4xl cursive tracking-widest hover:text-blue-600"
                    activeClassName="text-blue-100">
                        Cedric
                    </NavLink>
                    <NavLink to="/post" className="inflex-flex items-center py-3 px-3 my-6 text-blue-100 hover:text-blue-600" 
                    activeClassName="text-blue-100 bg-gray-700 rounded"
                    >
                        Post
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-3 px-3 my-6 text-blue-100 hover:text-blue-600"
                    activeClassName="text-blue-100 bg-gray-700 rounded">
                        Project
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-3 px-3 my-6 text-blue-100 hover:text-blue-600"
                    activeClassName="text-blue-100 bg-gray-700 rounded">
                        About me
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon url="https://www.linkedin.com/in/c%C3%A9dric-ivars-898550195/" className="m-6" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}