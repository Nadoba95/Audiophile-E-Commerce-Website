import Product from "../../models/product";

const ProductItemFeatures: React.FC<{ item: Product }> = ({ item }) => {
  return (
    <div className="product-item__features-wrapper">
      <div className="product-item__features">
        <h2 className="product-item__features-title">FEATURES</h2>
        <p className="product-item__features-desc">{item.features}</p>
      </div>
      <div className="product-item__in-box">
        <h2 className="product-item__features-title">IN THE BOX</h2>
        <ul className="product-item__list">
          {item.includes?.map((el) => {
            return (
              <li key={el.item} className="product-item__list-item">
                <span className="product-item__count">{el.quantity}x</span>
                {el.item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductItemFeatures;
