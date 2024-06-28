import "./GiftFinder.scss";
import Category from "../../components/Category/Category";
import CategoryList from "../../components/CategoryList/CategoryList";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_APP_API_URL;

export default function GiftFinder() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/categories`);
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      <Category />
      <CategoryList categories={categories} />
    </>
  );
}
