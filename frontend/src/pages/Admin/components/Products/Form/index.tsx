import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BaseForm from "../../BaseForm";
import { makePrivateRequest, makeRequest } from "core/utils/request";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { useParams } from "react-router-dom";

type ParamsType = {
  productId: string;
};

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    price: "",
    category: "0",
    description: "",
  });
  const { productId } = useParams<ParamsType>();
  const isEditing = productId !== "create";

  useEffect(() => {
    if (isEditing) {
      makeRequest({ url: `/products/${productId}` })
      .then((response) => {     
        
      })
    }
  }, [productId, isEditing]);

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
      //imagem mock para produtos adicionados
      imgUrl:
        "https://raw.githubusercontent.com/ulaecio/metas-ulasoftware-puc/main/frontend/resources/imagem-nao-disponivel.png",
      categories: [{ id: formData.category }],
    };

    makePrivateRequest({ url: "/products", method: "POST", data: payload })
      .then(() => {
        toast.success(`Produto cadastrado com sucesso!`);
        setFormData({ name: "", category: "", price: "", description: "" });
      })
      .catch(() => {
        toast.warning("Erro ao cadastrar produto!");
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <BaseForm title="cadastrar um produto">
        <div className="row form">
          <div className="col-6">
            <input
              value={formData.name}
              name="name"
              type="text"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Nome do produto"
            />
            <select
              value={formData.category}
              className="form-control mb-5"
              onChange={handleOnChange}
              name="category"
            >
              <option value="0">Selecione a categoria</option>
              <option value="1">Livros</option>
              <option value="2">Eletrônicos</option>
              <option value="3">Computadores</option>
              <option value="4">Bebidas</option>
            </select>
            <input
              value={formData.price}
              name="price"
              type="text"
              className="form-control"
              onChange={handleOnChange}
              placeholder="Insira o valor do produto"
            />
          </div>
          <div className="col-6">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleOnChange}
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

export default Form;
