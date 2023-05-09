import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h2>Sayfa bulunamadı</h2>
      <br />

      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
};

export default Page404;
