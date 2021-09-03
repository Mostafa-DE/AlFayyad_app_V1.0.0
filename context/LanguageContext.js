import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("arabic");

  const ChangeToEnglishLanguage = () => {
    setLanguage("english");
  };

  const ChangeToArabicLanguage = () => {
    setLanguage("arabic");
  };

  return (
    <LanguageContext.Provider
      value={{ language, ChangeToEnglishLanguage, ChangeToArabicLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
