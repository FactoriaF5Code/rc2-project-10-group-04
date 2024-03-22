import "./DetailsProduct.css"
import { useFetch } from "../../components/catalogue/useFetch";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";



function DetailsProduct(match) {
  const productId = match.params.id
  const { data } = useFetch(`http://localhost:8080/product/${productId}`);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="containerBg"><div className="bodyContainer">
      <div className="searchContainer">
        <input
          className="searchInput"
          type="search"
          placeholder="Buscar..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="searchIcon">
          <ShoppingCartOutlinedIcon />
        </span>
      </div>
      <div className="catalogueContainer">
        <section className="bannerContainer">
          <div className="banner">
            <div className="bannerBg">
              <h2>¡Empieza tu transformación hoy mismo!</h2>
            </div>
          </div>

          <div className="products">
            {filteredData?.map((product) => (
              <div key={product.id}>
                <section className="containerImg">
                  <section>
                    <img src={product.img} alt={product.name}></img>
                  </section>
                </section>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>

    </div>
  )
}

export default DetailsProduct