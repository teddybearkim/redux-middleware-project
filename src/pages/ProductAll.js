import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux";


const ProductAll = () => {
  const products = useSelector((state) => state.product.products)
  const [query, setQuery] = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const getProducts = () => {
    const searchQuery = query.get('q') || ""
    dispatch(productAction.getProducts(searchQuery))
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {
        products.length > 0 ? (
          products.map((e, i) => {
            return (
              <div className="product-cardbox" onClick={() => {
                navigate(`/detail/${e.id}`)
              }} key={i}>
                <ProductCard data={e} />
              </div>
            );
          }
          )) : null
      }
    </div>
  );
};

export default ProductAll;