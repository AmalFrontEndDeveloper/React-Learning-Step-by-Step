type StatusProps = {
    status: 'Loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message;

    if (props.status == 'Loading') {
        message = 'loading';
    } else if (props.status == 'success') {
        message = 'Data Fetched successfully!';
    } else if(props.status =='error'){
        message = 'error fetching Data';
    }

    return (
        <div>
            <h1>status - {message}</h1>
        </div>
    )

}