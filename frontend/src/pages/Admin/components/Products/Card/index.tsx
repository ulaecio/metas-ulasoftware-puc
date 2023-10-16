import ProductPrice from "pages/Catalog/components/ProductPrice";
import "./styles.css";
import { Product } from "core/types/Product";

type Props = {
  product: Product;
};
const Card = ({ product }: Props) => {
  return (
    <div className="product-card-admin">
      <div className="row">
        <div className="col-2 text-c">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="py-3 product-card-image-admin"
          />
        </div>
        <div className="col-7">
          <h3 className=" py-2 product-card-name-admin"  key={product.id} >{product.name}</h3>
          <ProductPrice price={product.price} />
          <div>
            {product.categories.map((category) => (
              <span className="badge badge-secondary" key={category.id} >{category.name}</span>
            ))}
          </div>
        </div>
        <div className="col-2 pt-2 product-card-description-admin ml-4">
          <button
            type="button"
            className="btn btn-edit btn-block btn-secondary border-radius-10"
          >
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
