import "./Product.scss";

function Product({ product, theme, updateProduct }) {
  const { product_name, price, image, isActive } = product;
  const classNames = ["product", `product--${theme}`];

  if (!isActive) {
    classNames.push("product--inactive");
  }

  return (
    <li className={classNames.join(" ")}>
      <div className="product__details">
        <img className="product__image" src={image} alt="product image" />
        <span className="product__name">{product_name}</span>
        <span className="product__number">{price}</span>
        <div className="product__actions">
          <button
            className="product__button"
            onClick={() => {
              updateProduct({ ...product, isActive: !isActive });
            }}
          >
            {isActive ? "Add to cart" : "Remove from cart"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default Product;
