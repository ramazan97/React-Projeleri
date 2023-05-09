import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../stores/counter";
const CounterActons = () => {
  const dispatch = useDispatch();
  // globala veri göndermek için useDispatch kullanıyoruz

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Arttır (+)</button>
      <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
    </div>
  );
};

export default CounterActons;
