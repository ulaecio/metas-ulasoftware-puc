import React, { useEffect, useState } from "react";
import { makePrivateRequest } from "core/utils/request";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import BaseForm from "../../BaseForm";
import { toast } from "react-toastify";

type ProductData = {
  name: string;
  category: string;
  price: string;
  description: string;
  imgUrl: string;
};

type ParamsType = {
  productId: string;
};

const EditForm = () => {
  const { handleSubmit, register, setValue } = useForm<ProductData>();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const history = useHistory();
  const { productId } = useParams<ParamsType>();

  const isEditing = productId !== "create";

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/products/${productId}` }).then((response) => {
        setProductData(response.data);
      });
    }
  }, [productId, isEditing]);

  useEffect(() => {
    if (productData) {
      // Set the form input values with the product data
      setValue("name", productData.name);
      setValue("category", productData.category);
      setValue("price", productData.price);
      setValue("description", productData.description);
      setValue("imgUrl", productData.imgUrl);
    }
  }, [productData, setValue]);

  const onSubmit = (data: ProductData) => {
    makePrivateRequest({ url: `/products/${productId}`, method: 'PUT', data })
      .then(() => {
        toast.success("Produto atualizado com sucesso!");
        history.replace('/admin/products');
      })
      .catch(() => {
        toast.error("Erro ao atualizar o produto!");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title="Editar">
        <div className="row form">
          <div className="col-6">
            <input
              {...register("name")}
              type="text"
              className="form-control mb-5"
              placeholder="Nome do produto (Minimo 5 caracteres)"
            />
            <input
              {...register("category")}
              type="text"
              className="form-control mb-5"
              placeholder="Categoria do produto"
            />
            <input
              {...register("price")}
              type="number"
              className="form-control mb-5"
              placeholder="Preço do produto"
            />
            <input
              {...register("imgUrl")}
              type="text"
              className="form-control"
              placeholder="Imagem do produto"
            />
          </div>
          <div className="col-6">
            <textarea
              {...register("description")}
              className="form-control"
              cols={30}
              rows={10}
            />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default EditForm;
