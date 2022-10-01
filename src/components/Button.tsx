import React from "react";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, name: any) => void;
}

let ListObj = {
    name:'Amal',
    contact:911393287584
}

export const Button = (props: ButtonProps) => {
    return <button onClick={(event)=>props.handleClick(event,ListObj)}>Click </button>
}