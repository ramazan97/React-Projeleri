import { Route, Routes, Link, NavLink } from "react-router-dom";

import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import Page404 from "../src/pages/404";
import Contact from "../src/pages/Contact";
import BlogLayout from "./pages/blog/index";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <nav>
        {/* aşşagıfa navlink in 3 farkli kullanımını gördük
a etiketi kullanmadık çünkü sayfayı yeniliyor */}

        <NavLink to="/" className={({ isActive }) => isActive && "aktif"}>
          Anasayfa
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "red" : "transparent",
          })}
        >
          Contact
        </NavLink>

        <NavLink to="/blog">
          {({ isActive }) => (
            <>
              Blog
              {isActive && "(aktif)"}
            </>
          )}
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogLayout />}>
          {/* eğer nested- iç içe döngüler olarak kullanacaksak Outlet isminde
yaoımızı tanımlıyoruz */}
          {/* yani bu şu demek sayfamız var sayfamızda sabit ve dinamik
değerlerimiz var  bu olayı kapsıyor */}

          {/* url ile adresimizdeki veriyi çekebiliyoruz */}

          <Route index={true} element={<Blog />} />
          <Route path="post/:id/:url" element={<Post />} />
          <Route path="categories" element={<Categories />} />
        </Route>

        {/* page 404 sayfası oluşturma eğerki arana sayfa yoksa page 404 oluşturulur */}
        <Route path="*" element={<Page404 />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
