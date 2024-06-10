import { useState } from "react";

const Pvz1 = () => {
    const [skaicius, setSkaicius] = useState(1);

    const didintiHandler = () => {
        setSkaicius(skaicius + 1);
    }

    const mazintiHandler = () => {
        setSkaicius(skaicius - 1);
    }

    return (
        <div className="blokas">
            <h2>Counteris</h2>
            <button onClick={didintiHandler}>Didinti</button>
            <button onClick={mazintiHandler}>Mazinti</button>
            <p>Skaicius yra: {skaicius}</p>
        </div>
    )
}

export default Pvz1