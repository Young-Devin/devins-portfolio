import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubAlt, faFacebook, faInstagram, faSnapchatGhost} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer(){
    return (
        <footer className="bg-gray-800 text-white text-left text-xs p-3 absolute bottom-0 w-full">
            &copy; Copyright 2021
                <FontAwesomeIcon 
                    className="float-right mr-3" 
                    icon={faGithubAlt}
                />
                <FontAwesomeIcon 
                    className="float-right mr-3" 
                    icon={faFacebook}
                />
                <FontAwesomeIcon 
                    className="float-right mr-3" 
                    icon={faInstagram}
                />
                <FontAwesomeIcon 
                    className="float-right mr-3" 
                    icon={faSnapchatGhost}
                />
        </footer>
    )
}

export default Footer