import Product from "../Product/Product";
import "./ProductList.scss";

function ProductList({ products, status, theme, updateProduct }) {
  return (
    <section className="product-section">
      <h3 className="product-section__title">{status}</h3>
      {!products.length ? (
        <h4>No {status} products</h4>
      ) : (
        <ul className="product-list">
          {products
            .sort((a, b) => a.number - b.number)
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                theme={theme}
                updateProduct={updateProduct}
              />
            ))}
        </ul>
      )}
    </section>
  );
}

export default ProductList;
