import "./CategoryList.scss";
import { Link } from "react-router-dom";

function CategoryList({ categories, status, theme }) {
  if (!categories.length) {
    return <>Loading categories...</>;
  }

  const categoryItems = [];

  for (let i = 0; i < categories.length; i++) {
    const { id, name, image } = categories[i];

    categoryItems.push(
      <Link key={id} className="category-list__link" to={`/categories/${id}`}>
        <article className="category-list__item">
          <span>
            <img className="category-list__image" src={image} alt="" />
          </span>
          <h2 className="category-list__name">{name}</h2>
        </article>
      </Link>
    );
  }

  return (
    <div>
      <section className="category-list">
        <div className="category-list__container category-list__container--age">
          <h2 className="category-list__header">What age are they ?</h2>
          <div className="category-list__wrapper">
            <p className="category-list__text">0-3</p>
            <p className="category-list__text">3+</p>
            <p className="category-list__text">5+</p>
            <p className="category-list__text">7+</p>
            <p className="category-list__text">12+</p>
            <p className="category-list__text">14-16</p>
          </div>
        </div>
      </section>
      <section className="category-list">
        <div className="category-list__container category-list__container--interest">
          <h2 className="category-list__header">
            What are they interested in ?
          </h2>
          <div className="category-list__wrapper">{categoryItems}</div>
        </div>
      </section>
      <section className="category-list">
        <div className="category-list__container category-list__container--price">
          <h2 className="category-list__header">
            How much do you want to spend?
          </h2>
          <div className="category-list__wrapper">
            <p className="category-list__text">£0-£19.99</p>
            <p className="category-list__text">£20-£49.99</p>
            <p className="category-list__text">£50-£99.99</p>
            <p className="category-list__text">£100-£199.99</p>
            <p className="category-list__text">£200+</p>
          </div>
        </div>
      </section>
      <section className="category-list">
        <div className="category-list__container category-list__container--difficulty">
          <h2 className="category-list__header">
            What level of difficulty do you prefer?
          </h2>
          <div className="category-list__wrapper">
            <p className="category-list__text">1-99 pcs</p>
            <p className="category-list__text">100-249 pcs</p>
            <p className="category-list__text">250-499 pcs</p>
            <p className="category-list__text">500-999 pcs</p>
            <p className="category-list__text">500-999 pcs</p>
            <p className="category-list__text">1000-1999 pcs</p>
            <p className="category-list__text">2000+ pcs</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryList;
