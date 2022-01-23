import React, { Fragment, useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
  
    // when using [] as dependency the useEffect will only load once in the beginnning.
  
    return (
        <Fragment>
            <ProductList products={products} />
        </Fragment>
    )
}