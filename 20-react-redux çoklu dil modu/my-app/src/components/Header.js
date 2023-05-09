import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { dark, language } = useSelector((state) => state.site);
  //   export const counter = createSlice({
  //     name: 'counter',
  //     initialState: {
  //       value: 1,
  //     },

  //   globaldean veri cekmek için useSelector kullanıyoruz bunuda counnt diye bir değişkenbe
  //   aktarıyoruz
  //     stores içersindeki counter.je deki değeri cektik

  return (
    <div>
      header
      <div>
        Dark mod = {dark ? "evet" : "hayır"}
        <br />
        Mevcur dil ={language}
      </div>
    </div>
  );
};

export default Header;
