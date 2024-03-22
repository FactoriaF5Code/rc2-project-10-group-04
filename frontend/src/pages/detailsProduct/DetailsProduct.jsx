import "./DetailsProduct.css";
import { useFetch } from "../../components/catalogue/useFetch";
import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useParams } from "react-router-dom";

function DetailsProduct() {
  const { productId } = useParams(); // Obtén el parámetro 'productId' de la URL
  const { data } = useFetch(`http://localhost:8080/product/${productId}`);
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState(null);

  // Utiliza useEffect para actualizar el producto cuando cambia el ID
  useEffect(() => {
    setProduct(data);
  }, [data]);

  // Asegúrate de que la data del producto esté disponible antes de renderizar
  if (!product) return null;

  return (
    <div className="containerBg">
      <div className="bodyContainer">
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

            <div>
              <div key={product.id}>
                <section className="details">
                  <section className="detailsImg">
                    <img src={product.img} alt={product.name}></img>
                  </section>
                  <section className="detailsParraf">
                    <div>
                      <p className="detailsTitle">{product.name}</p>
                      <p className="detailsPrice">{product.price} €</p>
                      <p className="detailsDescription">
                        {product.description}
                      </p>
                    </div>
                    <button className="detailsBtn">Añadir al carrito</button>
                  </section>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
