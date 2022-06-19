import React, { Components} from "react";
import './Navbar.css'

const Navbar = (props) => {
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Public API for Public APIs<i className="fab fa-react"></i></h1>
            <div className="menu-icon"></div>
            <ul className="navMenu">
                <li>Status</li>
                <button class="bg-blue-300 font-bold hover:bg-blue-100 py-2 px-4 rounded">Categories</button>
                <div class="bg-gray-200 flex flex-col rounded mt-1 p-2 text-sm w-32">
                    <p class="px-2 py-1 hover:bg-blue-300 rounded">1</p>
                    <p class="px-2 py-1 hover:bg-blue-300 rounded">1</p>
                    <p class="px-2 py-1 hover:bg-blue-300 rounded">1</p> 
                </div>
                <li>Search</li>
            </ul>
        </nav>
    )
}

export default Navbar