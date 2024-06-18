import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResults } from "../api/api";
import ProductList from "../components/productlist/ProductList";

function Products() {
    return(
        <ProductList/>
    )
};

export default Products;
