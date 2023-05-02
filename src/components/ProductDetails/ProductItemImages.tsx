import Product from "../../models/product";

const ProductItemImages: React.FC<{ item: Product }> = ({ item }) => {
  if (item.gallery) {
    let { img1, img2, img3 } = item.gallery;
    img1 = `.${img1}`;
    img2 = `.${img2}`;
    img3 = `.${img3}`;

    return (
      <div className="product-item__gallery">
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
      </div>
    );
  }

  return null;
};

export default ProductItemImages;
