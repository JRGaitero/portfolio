import React from "react";

const Education = () => {
    return <div className={'grow bg-zinc-800 w-full animate-fadeIn flex flex-col justify-center items-center'}>
        <div className={'w-2/5 flex justify-between font-bold text-2xl'}>
            <p className={''}>09/2020 - Currently</p>
            <p>IES Rafael Alberti</p>
        </div>
        <div className={'w-2/5 font-medium text-xl pt-2'}>
            <p>Web applications development vocational training <span className={'underline'}>(ISCED Level 5)</span></p>
        </div>
        <div className={'w-2/5 text-lg pt-4'}>
            <p>IES Rafael Alberti Course offers me the opportunity to develop my skills using a wide variety of technologies
                and techniques used in today's world. The approach of applying what I have learned to more realistic projects
                gives me the skills and knowledge to create web applications following best practices and design principles.</p>
        </div>
    </div>
}

export default Education