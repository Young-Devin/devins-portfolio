import React from 'react'
import ComputerBackground from '../Images/intro-background.png'

function Home(){
    return(
        <div>

            <div styles={{backgroundImage: `url(${ComputerBackground})` }} className="flex items-center justify-center border-b h-screen">
                <h1 className="font-bold text-2xl">
                    Hello everyone! My name is Devin Young and this is my portfolio.
                </h1>
            </div>
            <h2 className="font-bold text-2xl text-center border-b-2 pt-3 pb-3">CenEats</h2>
            <iframe title="CenEats" className="w-full h-screen mt-3" src="https://ceneats.herokuapp.com/"></iframe>
            <h2 className="font-bold text-2xl text-center border-b-2 pt-3 pb-3">CenEats</h2>
            <iframe title="CenEats" className="w-full h-screen mt-3" src="https://devin-react-playground.herokuapp.com/"></iframe>
        </div>
    )
}

export default Home