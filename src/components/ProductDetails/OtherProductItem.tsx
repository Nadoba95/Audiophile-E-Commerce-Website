import Product from "../../models/product";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

const IMAGE_SIZE = "desktop";

const OtherProductsItem: React.FC<{ item: Product }> = ({ item }) => {
  return (
    <div className="other-products__box">
      {item.others?.map((el) => {
        const category = el.slug.includes("speaker")
          ? "speakers"
          : el.slug.includes("headphones")
          ? "headphones"
          : "earphones";

        const path = `/${category}/${el.slug}`;

        return (
          <div key={el.slug} className="other-products__card">
            <div className="other-products__image-wrapper">
              <img className="other-products__img" src={`.` + el.image[IMAGE_SIZE]} alt={el.slug} />
            </div>
            <p className="other-product__name">{el.name}</p>
            <PrimaryButton to={path} />
          </div>
        );
      })}
    </div>
  );
};

export default OtherProductsItem;
