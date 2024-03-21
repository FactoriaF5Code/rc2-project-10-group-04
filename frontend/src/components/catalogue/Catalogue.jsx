import "./Catalogue.css";
import { useFetch } from "./useFetch";
import { useState } from "react";

function Catalogue() {
const{data} = useFetch("http://localhost:8080/product")
const filteredData=data?.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
const [searchTerm,setSearchTerm]= useState("")

  return (
    <div className="catalogueContainer">
      <section>
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
                <img
                  src={product.img}
                  alt={product.name}
                  
                ></img>
              </section>
              
              </section>
            
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}

export default Catalogue;
