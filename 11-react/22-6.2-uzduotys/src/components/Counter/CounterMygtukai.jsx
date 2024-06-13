const CounterMygtukai = (props) => {

    const click1Handle = () => {
        props.onPrideti(1)
    }

    const click2Handle = () => {
        props.onPrideti(2)
    }

    const click5Handle = () => {
        props.onPrideti(5)
    }

    return (
        <div>
            <button onClick={click1Handle}>+1</button>
            <button onClick={click2Handle}>+2</button>
            <button onClick={click5Handle}>+5</button>
        </div>
    )
}

export default CounterMygtukai