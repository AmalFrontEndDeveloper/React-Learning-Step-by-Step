type personList = {
    names:{
        FirstName:string,
        LastName:string
    }[]
}
export const PersonList = (props:personList) => {
    return (
        <div>
            {props.names.map((name)=>{
                return (
                    <h1 key={name.FirstName}>{name.FirstName} - {name.LastName}</h1>
                )
            })}

        </div>
    )
}