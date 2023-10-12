import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsResponse } from "../../types/Product";
import ProductCard from "./components/ProductCard";
import ProductCardLoader from "./components/Loaders/ProductCardLoader";
import { requestBackend } from "../../utils/request";
import "./styles.css";
import Pagination from "./components/Pagination";
import NavBarCatalog from "./NavBarCatalog";
import Footer from "components/Footer";

const Catalog = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 12,
    };

    setIsLoading(true);
    requestBackend({ url: "/products", params })
      .then((response) => setProductsResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);

  return (
    <>
      <NavBarCatalog />
      <div className="catalog-container">
        {/* <h1 className="catalog-title">Catalogo de produtos</h1> */}

        <div className="catalog-products">
          {isLoading ? (
            <ProductCardLoader />
          ) : (
            productsResponse?.content.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))
          )}
        </div>
        {productsResponse && (
          <Pagination
            totalPages={productsResponse.totalPages}
            activePage={activePage}
            onChange={(page) => setActivePage(page)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
