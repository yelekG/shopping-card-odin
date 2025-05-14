import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Module CSS kullanıyorsan


export default function Navbar({ cartItemCount }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">Alışveriş</Link>
        </div>
        
        <ul className={styles.navList}>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/shop">Ürünler</Link></li>
        </ul>

        <div className={styles.cartSection}>
          <Link to="/cart" className={styles.cartLink}>
            <span className={styles.cartCount}>{cartItemCount}</span>
            <span className={styles.cartText}>Sepetim</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
