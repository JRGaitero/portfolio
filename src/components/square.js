import React from "react";

const Square = (props) => {
    return <div className={'basis-1/3 h-full border-2 border-zinc-900 cursor-pointer grid place-items-center text-zinc-900 font-bold text-2xl active:bg-zinc-500'} onClick={props.chooseSquare}>{props.value}</div>
}

export default Square