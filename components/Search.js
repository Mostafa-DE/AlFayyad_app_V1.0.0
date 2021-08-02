import { useRouter } from "next/router";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

function Search() {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    router.push(`/products/search?term=${term}`);
    setTerm("");
  };
  const handleChange = (evnt) => {
    setTerm(evnt.target.value);
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          variant="standard"
          label="Search"
          onChange={handleChange}
          value={term}
          required
        />
        <button type="submit" style={{ background: "none", border: "none" }}>
          <i
            className="fas fa-search"
            style={{
              marginTop: "1.5rem",
              marginLeft: "0.2rem",
            }}
          ></i>
        </button>
      </form>
    </div>
  );
}

export default Search;
