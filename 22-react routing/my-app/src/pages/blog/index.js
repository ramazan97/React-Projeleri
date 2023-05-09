import React from "react";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div>
      <h3> Blog</h3>


      {/* eğer nested- iç içe döngüler olarak kullanacaksak Outlet isminde
yaoımızı tanımlıyoruz */}
      {/* yani bu şu demek sayfamız var sayfamızda sabit ve dinamik
değerlerimiz var  bu olayı kapsıyor */}
      <Outlet />
    </div>
  );
};

export default BlogLayout;
