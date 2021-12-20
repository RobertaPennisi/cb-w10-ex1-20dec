const http = () => 
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())

export {http};