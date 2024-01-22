import { createContext } from "react";
import { useTranslation } from "react-i18next";

export const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <LangContext.Provider value={{ t, toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
