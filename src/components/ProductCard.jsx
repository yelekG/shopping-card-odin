import { useState } from "react";
import styles from "./ProductCard.module.css"

export default function ProductCard({ product, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrement() {
        setQuantity(prev => prev + 1);
    }

    function handleDecrement() {
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }

    function handleInputChange(e) {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        }
    }

    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.price}>{product.price.toFixed(2)} ₺</p>
                <p className={styles.description}>{product.description.substring(0, 100)}...</p>

                <div className={styles.controls}>
                    <button onClick={handleDecrement} className={styles.quantityButton}>-</button>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleInputChange}
                        className={styles.quantityInput}
                    />
                    <button onClick={handleIncrement} className={styles.quantityButton}>+</button>
                </div>

                <button 
                    onClick={() => onAddToCart(product)} 
                    className={styles.addButton}
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
}