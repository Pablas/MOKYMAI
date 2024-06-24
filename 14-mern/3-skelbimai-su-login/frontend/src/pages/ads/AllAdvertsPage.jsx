import AdsList from "../../components/AdsList"
import { useState } from "react"


const AllAdvertsPage = () => {
  
  const [ads, setAds] = useState([
    { _id: 1, title: `parduodu siela`, price: 100000, category: `Kita`},
    { _id: 2, title: `parduodu kede`, price: 39, category: `Baldai`},
    { _id: 3, title: `ieskau dviracio`, price: 140, category: `Pramogos`},
    { _id: 4, title: `taisau baldus`, price: 535, category: `Paslaugos`},
  ])

  return (
    <div>
      <h1>Skelbimai</h1>
      <p>Viskas ko galite panoreti</p>
      <AdsList data={ads}/>
    </div>
  )
}

export default AllAdvertsPage