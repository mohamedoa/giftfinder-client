import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../ProductList/ProductList";
import { useParams } from "react-router";
import "./Category.scss";

const API_URL = import.meta.env.VITE_APP_API_URL;

function Category() {
  const [category, setCategory] = useState(null);

  const { id } = useParams();

  const fetchCategory = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/categories/${id}/products`);
      setCategory(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (product) => {
    try {
      await axios.patch(`${API_URL}/products/${product.id}`, product);
      fetchCategory(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategory(id);
  }, [id]);

  if (!category) {
    return <>Loading...</>;
  }

  const { products } = category;

  const activeProducts = products.filter((p) => p.isActive);
  const inactiveProducts = products.filter((p) => !p.isActive);

  return (
    <>
      <div>
        <h2 className="product__title">
          Here are the best lego sets for kids who like {category.name} !
        </h2>
      </div>

      <ProductList
        status="Products"
        products={activeProducts}
        theme={category.abbreviation}
        updateProduct={updateProduct}
      />

      <ProductList
        status="Cart"
        products={inactiveProducts}
        theme={category.abbreviation}
        updateProduct={updateProduct}
      />
    </>
  );
}

export default Category;
