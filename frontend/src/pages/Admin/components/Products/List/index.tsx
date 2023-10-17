import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card";
import "./styles.css";
import { ProductsResponse } from "core/types/Product";
import { makePrivateRequest, makeRequest } from "core/utils/request";
import Pagination from "pages/Catalog/components/Pagination";
import { toast } from "react-toastify";

const List = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 4,
    };
    setIsLoading(true);
    makeRequest({ url: "/products", params })
      .then((response) => setProductsResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);

  const handleCreate = () => {
    history.push("/admin/products/create");
  };

  const onRemove = (productId: number) => {
    makePrivateRequest({ url: `/products/${productId}`, method: "DELETE" })
      .then(() => {
        toast.success("Produto excluido com sucesso!");
        history.replace("/admin/products");
      })
      .catch(() => {
        toast.error("Erro ao excluir o produto!");
      })
  }

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
            <Card product={product} key={product.id} onRemove={onRemove} />
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
