import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GiftFinder from "./pages/GiftFinder/GiftFinder";
import NavBar from "./components/NavBar/NavBar";
import CategoryList from "./components/CategoryList/CategoryList";
import Category from "./components/Category/Category";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_APP_API_URL;

export default function App() {
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
      <BrowserRouter>
        <div className="layout">
          <CategoryList categories={categories} />
          <main className="main">
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/giftfinder" Component={GiftFinder} />
              <Route path="/categories/:id" element={<Category />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}
