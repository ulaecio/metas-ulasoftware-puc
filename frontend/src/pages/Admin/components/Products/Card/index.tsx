import ProductPrice from "pages/Catalog/components/ProductPrice";
import "./styles.css";
import { Product } from "core/types/Product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
  onRemove: (productId: number) => void;
};
const Card = ({ product, onRemove }: Props) => {
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
          <h3 className=" py-2 product-card-name-admin" key={product.id}>
            {product.name}
          </h3>
          <ProductPrice price={product.price} />
          <div>
            {product.categories.map((category) => (
              <span className="badge badge-secondary" key={category.id}>
                {category.name}
              </span>
            ))}
          </div>
        </div>
        <div className="col-2 pt-2 product-card-description-admin ml-4">
          <Link
            to={`/admin/products/${product.id}`}
            type="button"
            className="btn btn-edit btn-block btn-secondary border-radius-10"
          >
            EDITAR
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger btn-block border-radius-10 mt-2"
            onClick={() => onRemove(product.id) }
          >
            EXCLUIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
