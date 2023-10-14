import React, { useState } from "react";
import BaseForm from "../../BaseForm";
import "./styles.css";
import { requestBackend } from "utils/request";

type FormState = {
  name: string;
  price:string;
  category: string;
  description: string;
}

type FormEvent =  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    price: '',
    category: '0',
    description: ''
  });


  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({ ...data, [name]: value }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData, 
      imgUrl: 'https://nutripao.com/wp-content/uploads/2022/08/Refrigerante-Cajuina-Sao-Geraldo-2-Litros.jpg',
      categories: [{ id: formData.category}]

    }

    requestBackend({ url: '/users', method: 'POST', data: payload})
    .then(() => {
      setFormData({ name: '', category: '', price: '', description: '' });
    });

  }

  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="cadastrar um usuário">
        <div className="row">
          <div className="col-6">
            <input
              value={formData.name}
              name="name"
              type="text"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Nome do usuário"
            />
            <select
            value={formData.category}
            className="form-control mb-5" onChange={handleOnChange}
            name="category"
            >
                <option value="0">Selecione um cargo</option>
                <option value="1">vendedor</option>
                <option value="2">gerente</option>
            </select>
            <input
              value={formData.price}
              name="price"
              type="text"
              className="form-control"
              onChange={handleOnChange}
              placeholder="rota de venda do usuário"
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
