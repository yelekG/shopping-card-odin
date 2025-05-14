import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./Shop.module.css";

export default function Shop({ onAddToCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ürünler yüklenirken bir hata oluştu');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                // Benzersiz kategorileri al
                const uniqueCategories = [...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const filteredProducts = selectedCategory === "all" 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    if (loading) return <div className={styles.loading}>Yükleniyor...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.shop}>
            <h1>Ürünlerimiz</h1>
            
            <div className={styles.filters}>
                <button 
                    className={`${styles.filterButton} ${selectedCategory === "all" ? styles.active : ""}`}
                    onClick={() => setSelectedCategory("all")}
                >
                    Tümü
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className={styles.productsGrid}>
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={() => onAddToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
}