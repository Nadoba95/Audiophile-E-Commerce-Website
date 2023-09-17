import Product from "../../models/product";

const ProductItemImages: React.FC<{ item: Product }> = ({ item }) => {
  let { img1, img2, img3 } = item.gallery!;
  img1 = `.${img1}`;
  img2 = `.${img2}`;
  img3 = `.${img3}`;

  return (
    <section className="product-item__gallery">
      <div className="product-item__gallery-box">
        <div className="product-item__gallery-box">
          <img className="product-item__gallery-img" src={img1} alt="img1" />
        </div>
        <div className="product-item__gallery-box">
          <img className="product-item__gallery-img" src={img2} alt="img2" />
        </div>
      </div>
      <div className="product-item__gallery-box">
        <img className="product-item__gallery-img" src={img3} alt="img3" />
      </div>
    </section>
  );
};

export default ProductItemImages;
