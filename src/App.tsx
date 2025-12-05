import ProductCard from "./components/ProductCard";
const App = () => {
  return (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
    <ProductCard />
    </div>);
};

export default App;