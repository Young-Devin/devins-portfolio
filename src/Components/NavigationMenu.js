import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props){
    return(
        <div>
            <div className="font-bold text-black text-2xl py-3">
                Devin's Portfolio
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu