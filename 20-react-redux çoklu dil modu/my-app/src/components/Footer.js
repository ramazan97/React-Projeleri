import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../stores/site";

const Footer = () => {
  const dispatch = useDispatch();
  const { dark, language } = useSelector((state) => state.site);

  //   export const counter = createSlice({
  //     name: 'counter',
  //     initialState: {
  //       value: 1,
  //     },

  //   globaldean veri cekmek için useSelector kullanıyoruz bunuda counnt diye bir değişkenbe
  //   aktarıyoruz
  //     stores içersindeki counter.je deki değeri cektik

  const languages = ["tr", "en"];

  // className={lang===language? "active": ""
  // burada gelen degere göre değişen css kodu yazıldı

  return (
    <div>
      footer
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => dispatch(setLanguage(lang))}
            className={lang === language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}

        <div>
          <button onClick={() => dispatch(setDarkMode())}>
            {dark ? "light moda geç" : "dark moda geç"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
