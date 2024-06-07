

const Uzd3 = () => {

    let sk1 = 1;
    let sk2 = 2;
    let sk3 = 10;

    const trysSkaiciai = (a, b, c) => {
        return <p>Pirmas {a}, antras {b}, trecias {c}</p>
    }

    const didziausias = (a, b, c) => {
        
    }

    const suma = (a, b, c) => {
        return <p>{a} + {b} + {c} = {a + b + c}</p>
    }

    return (
        <div className="block">
            {trysSkaiciai(sk1, sk2, sk3)}
            <p>Didziausias skaicius: {didziausias(sk1, sk2, sk3)}</p>
            {suma(sk1, sk2, sk3)}
        </div>
    )
}

export default Uzd3