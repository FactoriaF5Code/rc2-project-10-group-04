import "./Catalogue.css";
import { useFetch } from "./useFetch";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Catalogue() {
  const { data } = useFetch("http://localhost:8080/product");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
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
                <section className="container">
                  <section>
                    <img src={product.img} alt={product.name}></img>
                  </section>
                </section>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Catalogue;
