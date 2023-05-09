import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  //   export const counter = createSlice({
  //     name: 'counter',
  //     initialState: {
  //       value: 1,
  //     },

  //   globaldean veri cekmek için useSelector kullanıyoruz bunuda counnt diye bir değişkenbe
  //   aktarıyoruz
  //     stores içersindeki counter.je deki değeri cektik


  return <div>{count}</div>;
};

export default Counter;
