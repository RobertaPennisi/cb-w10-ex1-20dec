import styles from "./ProductCard.module.scss"

const ProductCard = (props) => {
    return(
        <div className={styles.ProductCard}>
            {props.image ? <img src={props.image} alt={props.title} /> : <></>}
            <h3>{props.title || "article not available"}</h3>
            <p>{props.price || "price not available"}</p>
            <p>{props.description || "no description available for this article"}</p>
        </div>
    )
}

export default ProductCard