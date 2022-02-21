import React from "react";

const Portfolio = () => {
    return <div className={'grow bg-zinc-800 w-full animate-fadeIn flex justify-center items-center'}>
        <div className={'grid grid-cols-2 grid-rows-2 gap-20'}>
            <div className={'relative cryptarch bg-black h-48 w-96 rounded-md'}>
                <p className={'absolute w-full bg-zinc-300 rounded-t-md text-zinc-900 text-center font-bold text-xl'}>Cryptarch</p>
                <p className={'rounded-md opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-black/80 text-sm text-center p-4 text-white font-semibold'}>
                    responsive web application, previously designed in Figma, using pure HTML,
                    CSS and JavaScript. It makes use of the public Bungie.Net api to view weapon information from the
                    game database.</p>
            </div>
            <div className={'relative oopCards bg-black h-48 w-96 rounded-md'}>
                <p className={'absolute w-full bg-zinc-300 rounded-t-md text-zinc-900 text-center font-bold text-xl'}>Cloneslay</p>
                <p className={'rounded-md opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-black/80 text-sm text-center p-4 text-white font-semibold'}>
                    First group project of my course in IES Rafael Alberti. It is a game based on Slay The Spire developed in
                    Python using Pygame.</p>
            </div>
            <div className={'relative clickApi bg-black h-48 w-96 rounded-md'}>
                <p className={'absolute w-full bg-zinc-300 rounded-t-md text-zinc-900 text-center font-bold text-xl'}>Click competition API</p>
                <p className={'rounded-md opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-black/80 text-sm text-center p-4 text-white font-semibold'}>
                    RESTful API using python with Flask framework. It is a clicker simulation, where
                    users get clicks and are ranked according to their country, region or city.</p>
            </div>
            <div className={'relative smartCafe bg-black h-48 w-96 rounded-md'}>
                <p className={'absolute w-full bg-zinc-300 rounded-t-md text-zinc-900 text-center font-bold text-xl'}>SmartCafe</p>
                <p className={'rounded-md opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-black/80 text-sm text-center p-4 text-white font-semibold'}>
                    It is my course's final project in collaboration with a classmate. It is a Single Page
                    Application that allows students to order meals for lunch break inside educational institutions.</p>
            </div>
        </div>
    </div>
}

export default Portfolio