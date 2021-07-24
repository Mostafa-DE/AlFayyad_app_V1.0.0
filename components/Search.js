import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
// import { TiTimes } from "react-icons/ti";
import styles from "@/styles/Search.module.css";

function Search() {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [term, setTerm] = useState("");
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    router.push(`/products/search?term=${term}`);
    setTerm("");
  };
  const handleChange = (evnt) => {
    setTerm(evnt.target.value);
  };

  const [scrollState, setScrollState] = useState("top");
  let listener = null;
  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <div>
      <form
        className="d-flex"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {click ? (
          <div
            className={`${
              scrollState === "top"
                ? styles.searchField
                : styles.searchFieldScroll
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className={`${
                scrollState === "top"
                  ? styles.inputSearch
                  : styles.inputSearchScroll
              }`}
              onChange={handleChange}
            />
            <button type="submit" className="globalBtn">
              Search
            </button>
          </div>
        ) : (
          <div
            className={`${
              scrollState === "top"
                ? styles.searchIcon
                : styles.searchIconScroll
            }`}
            onClick={handleClick}
          >
            <BiSearchAlt2 />
          </div>
        )}
      </form>
    </div>
  );
}

export default Search;

{
  /* <form onSubmit={handleSubmit}>
<div className="input-group ">
    <input 
        type="text" 
        value={term} 
        onChange={handleChange} 
        placeholder="Search Products"
        className="form-control"
        aria-label="search"
        aria-describedby="search"
    />
    <button 
        className="globalBtn"
        type="submit"
        id="button-addon2"
    >
            Search
    </button>
</div>

</form> */
}
