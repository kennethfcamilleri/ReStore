import React, { Fragment, useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const dispatch = useAppDispatch();
    const {productsLoaded, status} = useAppSelector(state => state.catalog)

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])
  
    // when using [] as dependency the useEffect will only load once in the beginnning.
  
    if (status.includes('pending')) return <LoadingComponent message='Loading products...' />

    return (
        <Fragment>
            <ProductList products={products} />
        </Fragment>
    )
}