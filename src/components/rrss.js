import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Rrss = () => {
    return <div className={'fixed bottom-0 left-1/2 w-28 -ml-14 -mb-2'}>
        <a href={'https://github.com/JRGaitero'}><FontAwesomeIcon className={'w-10 h-10 p-2 bg-gitHub-black text-white'} icon={faGithub} /></a>
        <a href={'https://www.linkedin.com/in/ramon-gaitero/'}><FontAwesomeIcon className={'w-10 h-10 p-2 bg-linkedIn-blue text-white'} icon={faLinkedinIn} /></a>
    </div>

}

export default Rrss