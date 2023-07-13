import { useSelector } from "react-redux";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";

const Home = () => {
  const { products, categories } = useSelector((state) => state);
  console.log(categories.list);

  return (
    <>
      <Poster />
      <Products products={products.list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
    </>
  );
};

export default Home;
