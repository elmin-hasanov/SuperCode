import Cart from "./components/Cart";
import ProductList from "./components/ProductList";


function App() {
  return (
    <div className="max-w-6xl mx-auto p-16 grid grid-cols-3 gap-8">
      <div className="border col-span-2">
        <ProductList />
      </div>
      <div className="border h-60">
        <Cart />
      </div>
    </div>
  );
}

export default App;
