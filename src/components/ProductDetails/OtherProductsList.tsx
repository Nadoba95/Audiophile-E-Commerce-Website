import Product from "../../models/product";
import OtherProductsItem from "./OtherProductItem";

const OtherProductsList: React.FC<{ item: Product }> = ({ item }) => {
  return (
    <section className="other-products">
      <h2 className="other-products__title">YOU MAY ALSO LIKE</h2>
      <OtherProductsItem item={item} />
    </section>
  );
};

export default OtherProductsList;
