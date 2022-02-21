import React from "react";
import Type from "./type";

const About = () => {
    const Profile = 'Hello, my name is Ramón Gaitero. \n I am a Web Development Student proficient in a range of ' +
    'languages and technologies, such as API and MVC development in Laravel (PHP), Flask (Python), Frontend using ' +
    'React.js, HTML and CSS, databases and SQL.'

    return <div className={'grow bg-zinc-800 w-full flex justify-center items-center'}>
        <p className={'w-1/2 h-1/3 text-center newLine font-bold text-3xl'}><Type text={Profile}/></p>
    </div>
}

export default About