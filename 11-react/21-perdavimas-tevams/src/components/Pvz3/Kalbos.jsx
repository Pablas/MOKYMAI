

const Kalbos = (props) => {

    const rinktisHandler = (e) => {
        props.onNewKalba(e.target.textContent)
    } 

  return (
    <div>
        <button onClick={rinktisHandler}>JavaScript</button>
        <button onClick={rinktisHandler}>C#</button>
        <button onClick={rinktisHandler}>PHP</button>
    </div>
  )
}

export default Kalbos