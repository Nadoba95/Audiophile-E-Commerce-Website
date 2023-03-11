const TextImage: React.FC = () => {
  return (
    <section className="text-image">
      <div className="text-image__container">
        <div className="text-image__card">
          <h2 className="text-image__title">
            BRINGING YOU THE <span className="text-image__title--orange">BEST </span>AUDIO GEAR
          </h2>
          <p className="text-image__description">
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories. We have a large showroom and
            luxury demonstration rooms available for you to browse and experience a wide range of
            our products. Stop by our store to meet some of the fantastic people who make Audiophile
            the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="text-image__img"></div>
      </div>
    </section>
  );
};

export default TextImage;
