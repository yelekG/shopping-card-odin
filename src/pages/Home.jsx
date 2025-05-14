import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hoş Geldiniz!</h1>
        <p className={styles.subtitle}>En kaliteli ürünler, en uygun fiyatlarla</p>
        <Link to="/shop" className={styles.shopButton}>
          Alışverişe Başla
        </Link>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Hızlı Teslimat</h3>
          <p>Siparişleriniz 24 saat içinde kargoya verilir</p>
        </div>
        <div className={styles.feature}>
          <h3>Güvenli Ödeme</h3>
          <p>256-bit SSL sertifikası ile güvenli alışveriş</p>
        </div>
        <div className={styles.feature}>
          <h3>7/24 Destek</h3>
          <p>Müşteri hizmetlerimiz her zaman yanınızda</p>
        </div>
      </section>
    </div>
  );
}