import yayJpg from '@/assets/yay.jpg';
import styles from './index.scss';

const HomePage = () => {
  return (
    <div>
      <h2 className={styles.title}>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="600" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default HomePage;
