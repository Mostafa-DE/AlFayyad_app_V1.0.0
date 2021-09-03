import styles from "@/styles/Search.module.css";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import Swal from "sweetalert2";
import { LanguageContext } from "@/context/LanguageContext";

const languageWords = {
  english: {
    TitleSearchLanguage: "What are you looking for ??",
    TitleInputSearchLanguage: "Search Here 😉",
    SearchBtnLanguage: "Search",
    CancelBtnLanguage: "Cancel",
    SearchValidationLanguage: "You can't leave this field empty ",
  },
  arabic: {
    TitleSearchLanguage: "أخبرنا مالذي تبحث عنه ؟؟",
    TitleInputSearchLanguage: "😉 إبحث هنا",
    SearchBtnLanguage: "بحث",
    CancelBtnLanguage: "إلغاء",
    SearchValidationLanguage: "نعتذر لا يمكنك ترك الحقل فارغ",
  },
};

function Search() {
  const router = useRouter();

  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    TitleSearchLanguage,
    TitleInputSearchLanguage,
    SearchBtnLanguage,
    CancelBtnLanguage,
    SearchValidationLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*------------Alert Search input----------*/
  const alertSearch = () => {
    Swal.fire({
      title: TitleSearchLanguage,
      input: "text",
      inputPlaceholder: TitleInputSearchLanguage,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: SearchBtnLanguage,
      cancelButtonText: CancelBtnLanguage,
      confirmButtonColor: "#03c7ff",
      cancelButtonColor: "#d33",
      preConfirm: (term) => {
        if (term != "") {
          router.push(`/products/search?term=${term}`);
        } else {
          Swal.showValidationMessage(SearchValidationLanguage);
        }
      },
    });
  };
  /*--------------------X-------------------*/

  return (
    <div>
      {/*------------search icon------------*/}
      <AiOutlineSearch
        className={styles.searchIconNavbar}
        onClick={alertSearch}
      />
      {/*-----------------X-----------------*/}
    </div>
  );
}

export default Search;
