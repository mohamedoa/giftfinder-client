import "./Product.scss";
import ageIcon from "../../assets/icons/age.svg";
import piecesIcon from "../../assets/icons/pieces.svg";
import skillIcon from "../../assets/icons/skill.svg";

function Product({ product, theme, updateProduct }) {
  const { product_name, price, pieces, age, skill, image, isActive } = product;
  const classNames = ["product", `product--${theme}`];

  if (!isActive) {
    classNames.push("product--inactive");
  }

  return (
    <li className={classNames.join(" ")}>
      <div className="product__details">
        <img className="product__image" src={image} alt="product image" />
        <span className="product__container">
          <div className="product__wrapper">
            <h3 className="product__name">{product_name}</h3>
            <p className="product__number">{price}</p>
          </div>
          <p className="product__availability">Available Now</p>
        </span>
        <div className="product__wrapper product__wrapper--border">
          <span className="product__age">
            <img className="product__info-icon" src={ageIcon} alt="" />
            <p className="product__info-text">{age}+</p>
            <p className="product__info-category">ages</p>
          </span>
          <span className="product__pieces">
            <img className="product__info-icon" src={piecesIcon} alt="" />
            <p className="product__info-text">{pieces}</p>
            <p className="product__info-category">pieces</p>
          </span>
          <span className="product__skill">
            <img className="product__info-icon" src={skillIcon} alt="" />
            <p className="product__info-text">{skill}</p>
            <p className="product__info-category">skills</p>
          </span>
        </div>
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
