import { 
  Banner, 
  Header, 
} from './containers';
import { ProductDetails } from './components';
import { Footer } from './containers';
import styles from "./App.module.css";
import recommendationsDumy from "./zapato.json";
import productDummy from "./productDummy.json";

const App = () => {
  return (
    <main className={styles.main}>
      <Banner/>
      <Header/>
      <ProductDetails product={productDummy} recommendations={recommendationsDumy} />
      <Footer/>
    </main>
  )
}

export default App