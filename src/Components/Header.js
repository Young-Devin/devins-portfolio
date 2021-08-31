import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className=" bg-gray-800 text-white border-b p-3 flex justify-between items-center">
            
            <Link to={`/`}>
                <span className="font-bold">
                    Devin's Portfolio
                </span>   
            </Link>
            
            

            <Navigation />
        </header>
    )
}

export default Header