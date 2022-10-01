type PersonProps = {
    name:{
        firstName:string,
        LastName:string
    }
}

export const Person = (props:PersonProps) =>{

    return <div>{props.name.firstName} - {props.name.LastName}</div>
}