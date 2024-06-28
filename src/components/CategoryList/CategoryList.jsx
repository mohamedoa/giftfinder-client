// import Category from "../Category/Category";
import "./CategoryList.scss";
import { NavLink, Link } from "react-router-dom";

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
        <div className="category-list__container">
          <h2>What age are they ?</h2>
          <div className="category-list__wrapper">
            <p className="category-list-text">0-3</p>
            <p className="category-list-text">3+</p>
            <p className="category-list-text">5+</p>
            <p className="category-list-text">7+</p>
            <p className="category-list-text">12+</p>
            <p className="category-list-text">14-16</p>
          </div>
        </div>
      </section>
      <section className="category-list">
        <div className="category-list__container">
          <h2>What are they interested in ?</h2>
          <div className="category-list__wrapper">{categoryItems}</div>
        </div>
      </section>
      <section className="category-list">
        <div className="category-list__container">
          <h2>What price range is best for you ?</h2>
          <div className="category-list__wrapper">
            <p className="category-list-text">£5+</p>
            <p className="category-list-text">£20+</p>
            <p className="category-list-text">£50+</p>
            <p className="category-list-text">£100 - £300</p>
            <p className="category-list-text">
              £££ I don't care they deserve it!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryList;
