

const NewAdvertPage = () => {
  return (
    <div>
      <h1>Sukurti nauja skelbima</h1>
      <p>Noredami sukurti nauja skelbima surasykite visa informacija apie ji</p>

      <form>
        <div>
          <label htmlFor="titleInput">Skelbimo pavadinimas: </label>
          <input type="text" id="titleInput" name="title"/>
        </div>
        <div>
          <label htmlFor="priceInput">Kaina: </label>
          <input type="number" id="priceInput" name="price"/>
        </div>
        <div>
          <label htmlFor="categoryInput">Kategorija: </label>
          <select id="categoryInput" name="category">
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