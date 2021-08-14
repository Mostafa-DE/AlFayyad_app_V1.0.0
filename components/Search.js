import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Swal from "sweetalert2";

function Search() {
  const router = useRouter();

  /*------------Alert Search input----------*/
  const alertSearch = () => {
    Swal.fire({
      title: "What are you looking for ??",
      input: "text",
      inputPlaceholder: "Search Here 😉",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Search",
      confirmButtonColor: "#03c7ff",
      cancelButtonColor: "#d33",
      preConfirm: (data) => {
        if (data != "") {
          router.push(`/products/search?term=${data}`);
        } else {
          Swal.showValidationMessage("You can't leave this field empty 😔");
        }
      },
    });
  };
  /*--------------------X-------------------*/

  return (
    <div>
      <AiOutlineSearch
        className={styles.searchIconNavbar}
        onClick={alertSearch}
      />
    </div>
  );
}

export default Search;
