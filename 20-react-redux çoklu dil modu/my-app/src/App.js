import Counter from "./components/Counter";
import CounterActons from "./components/CounterActons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { routes } from "./routes";

function App() {
  const { dark } = useSelector((state) => state.site);

  console.log(routes);
  return (
    <div className={dark ? "dark" : "light"}>
      <Header />
      <Counter />
      <CounterActons />

      <Footer />
    </div>
  );
}

export default App;
