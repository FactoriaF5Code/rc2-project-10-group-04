import "./Search.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function Search() {
  return (
    <div className="searchContainer">
      <input className="searchInput" type="search" 
      placeholder="Buscar..."
      />
      <span className="searchIcon">
        <ShoppingCartOutlinedIcon />
      </span>
    </div>
  );
}

export default Search;
