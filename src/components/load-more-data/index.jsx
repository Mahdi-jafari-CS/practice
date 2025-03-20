import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreDate() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${products.length}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        const newProducts = result.products.filter(
          (newProduct) =>
            !products.some((product) => product.id === newProduct.id)
        );
        setProducts([...products, ...newProducts]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 80) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="load-more-container">
      <h3>Products</h3>
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <p>{item.id}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={disableButton}
        >
          Load More Products
        </button>
        {disableButton && <p>No more products to load</p>}
      </div>
    </div>
  );
}
