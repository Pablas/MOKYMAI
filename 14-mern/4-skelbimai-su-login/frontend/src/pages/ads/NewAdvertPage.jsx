const NewAdvertPage = () => {
    return (
        <div>
            <h1>Sukurti naują skelbimą</h1>
            <p>Norėdami sukurti naują skelbimą surašykite visą informaciją apie jį</p>

            <form>
                <div>
                    <label htmlFor="titleInput">Skelbimo pavadinimas:</label>
                    <input type="text" id="titleInput" name="title" />
                </div>
                <div>
                    <label htmlFor="priceInput">Kaina:</label>
                    <input type="number" id="priceInput" name="price" />
                </div>
                <div>
                    <label htmlFor="categoryInput">Kategorija:</label>
                    <select name="category" id="categoryInput">
                        <option value="Baldai">Baldai</option>
                        <option value="Pramogos">Pramogos</option>
                        <option value="Paslaugos">Paslaugos</option>
                        <option value="Kita">Kita</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Sukurti</button>
                </div>
            </form>
        </div>
    )
}

export default NewAdvertPage
