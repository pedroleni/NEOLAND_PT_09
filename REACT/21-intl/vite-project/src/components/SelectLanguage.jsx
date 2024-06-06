import { useContext } from "react";
import { contextLanguage } from "../context/context-language";

const SelectLanguage = () => {
  const { handleLanguage, locale } = useContext(contextLanguage);
  console.log("🚀 ~ SelectLanguage ~ locale:", locale);
  return (
    <select
      name='language'
      defaultValue={locale}
      id='language'
      onChange={handleLanguage}
    >
      <option value='en-GB'>English</option>
      <option value='es'>Spanish</option>
      <option value='fr'>French</option>
    </select>
  );
};

export default SelectLanguage;
