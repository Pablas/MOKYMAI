
const Uzd2 = () => {

    const inputHandler = (e) => {
        console.log(e.target.value.split('').reverse().join('') == e.target.value ? `Žodis polindrominis` : `Žodis nepolindrominis`)
    }

    return (
        <div className="blokas">
            <input type="text" onInput={inputHandler}/>
        </div>
    )
}

export default Uzd2