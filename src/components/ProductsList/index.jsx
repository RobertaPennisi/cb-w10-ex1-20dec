import styles from "./ProductList.module.scss"
import { useState, useEffect } from 'react'
import { http } from "../../libs/API";
import ProductCard from '../ProductCard';

const products = [];

const ProductList = () => {
    const [allProducts, setAllProducts] = useState(products);

    useEffect(()=>{
        http().then((data) => setAllProducts(data));
    },[]);

    return(
        <div className={styles.wrapperProducts}>
        {allProducts.map((product) => (
            <ProductCard 
                key={product.id} 
                title={product.title} 
                description={product.description}
                price={product.price}
                image={product.image}
            />
        ))}

        </div>
    )
}

export default ProductList