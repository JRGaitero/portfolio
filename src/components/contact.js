import React from "react";
import Type from "./type";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const Contact = 'Feel free to send an email to jr.gaitero@gmail.com. \n ' +
        'You can also find me on LinkedIn or GitHub at the links below'

    return <div className={'grow bg-zinc-800 w-full flex flex-col justify-center items-center'}>
        <p className={'w-1/2 h-1/3 text-center newLine font-bold text-3xl'}><Type text={Contact}/></p>
        <FontAwesomeIcon className={'bounce text-8xl opacity-0'} icon={faArrowDown}/>
    </div>
}

export default Contact