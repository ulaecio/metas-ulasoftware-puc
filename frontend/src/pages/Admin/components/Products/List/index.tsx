import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card";
import "./styles.css";
import { ProductsResponse } from "core/types/Product";
import { makeRequest } from "core/utils/request";
import Pagination from "pages/Catalog/components/Pagination";

const List = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 12,
    };
    setIsLoading(true);
    makeRequest({ url: "/products?linesPerPage=4&direction=ASC&orderBy=name", params })
      .then((response) => setProductsResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);

  const handleCreate = () => {
    history.push("/admin/products/create");
  };
  return (
    <div className="admin-products-list">
      <button className="btn home-btn-order" onClick={handleCreate}>
        Adicionar
      </button>
      {isLoading ? (
        <div className="mt-1">
          <span>Carregando produtos ...</span>
        </div>
      ) : (
        <div className="admin-list-container">
          {productsResponse?.content.map((product) => (
            <Card product={product} key={product.id} />
          ))}
          {productsResponse && (
            <Pagination
              totalPages={productsResponse.totalPages}
              activePage={activePage}
              onChange={(page) => setActivePage(page)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default List;
