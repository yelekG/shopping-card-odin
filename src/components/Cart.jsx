import styles from './Cart.module.css';

export default function Cart({ cartItems, onUpdateQuantity, onRemoveItem }) {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className={styles.cart}>
            <h1>Sepetim</h1>
            {cartItems.length === 0 ? (
                <p>Sepetiniz boş</p>
            ) : (
                <>
                    <div className={styles.cartItems}>
                        {cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.image} alt={item.name} />
                                <div className={styles.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p>Fiyat: {item.price} TL</p>
                                    <div className={styles.quantity}>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <button 
                                    className={styles.removeButton}
                                    onClick={() => onRemoveItem(item.id)}
                                >
                                    Kaldır
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.cartSummary}>
                        <h2>Toplam: {total.toFixed(2)} TL</h2>
                        <button className={styles.checkoutButton}>Ödemeye Geç</button>
                    </div>
                </>
            )}
        </div>
    );
}