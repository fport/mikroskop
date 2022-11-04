import React, { useState, useEffect } from "react"

import { getProductById, currency } from "home/products"

export default function PDPContent() {
    const id = 1;
    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (id) {
            getProductById(id).then(setProduct)
        } else {
            setProduct(null)
        }
    }, [id])

    if (!product) return null;

    return <div>Product {product.name}</div>
}