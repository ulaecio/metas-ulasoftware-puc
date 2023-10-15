import ProductPrice from "pages/Catalog/components/ProductPrice";
import "./styles.css";

const Card = () => {
  return (
    <div className="product-card-admin">
      <div className="row">
        <div className="col-2 text-c">
          <img
            src="https://raw.githubusercontent.com/ulaecio/metas-ulasoftware-puc/main/frontend/resources/imagem-nao-disponivel.png"
            alt="imagem indiponivel"
            className="py-3 product-card-image-admin"
          />
        </div>
        <div className="col-7">
          <h3 className=" py-2 product-card-name-admin">Computador i7</h3>
          <ProductPrice price={45.5} />
          <div>
            <span className="badge badge-secondary">Crategoria 1</span>
            <span className="badge badge-secondary">Crategoria 2</span>
            <span className="badge badge-secondary">Crategoria 3</span>
          </div>
        </div>
        <div className="col-2 pt-2 product-card-description-admin ml-4">
          <button type="button" className="btn btn-edit btn-block btn-secondary border-radius-10">
            EDITAR
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-block border-radius-10 mt-2"
          >
            EXCLUIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
