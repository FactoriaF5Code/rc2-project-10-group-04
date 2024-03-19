import Catalogue from "../../components/catalogue/Catalogue"
import Search from "../../components/search/Search"
import "./Home.css"

function Home() {
  return (
    <div className="containerHome">
    <Search></Search>
    <Catalogue/>

    </div>
  )
}

export default Home